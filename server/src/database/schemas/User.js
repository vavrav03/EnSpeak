const mongoose = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema(
   {
      first_name: {
         type: String,
         required: true,
      },
      last_name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
      },
      profile_picture: { type: String },
      auth: {
         local: {
            password: String,
         },
         facebook: {
            id: String,
            accessToken: String,
         },
         twitter: {
            id: String,
            accessToken: String,
         },
         google: {
            id: String,
            accessToken: String,
         },
         linked_in: {
            id: String,
            accessToken: String,
         },
      },
   },
   { versionKey: false, timestamps: true }
);

if (process.env.NODE_ENV !== "test") {
   MongooseAutoIncrementID.initialise("counters");

   userSchema.plugin(MongooseAutoIncrementID.plugin, {
      modelName: "User",
      field: "user",
      incrementBy: 1,
      startAt: 1,
      unique: true,
      nextCount: false,
      resetCount: false,
   });
}

userSchema.virtual("full_name").get(function () {
   if (this.first_name && this.last_name) {
      return `${this.first_name} ${this.last_name}`;
   }
   if (this.first_name && !this.last_name) {
      return this.first_name;
   }
   if (!this.first_name && this.last_name) {
      return this.last_name;
   }
   return undefined;
});

userSchema.virtual("initials").get(function () {
   return (
      this.first_name &&
      this.last_name &&
      `${this.first_name[0].concat(this.last_name[0]).toUpperCase()}`
   );
});

userSchema.methods.isPasswordValid = function (password) {
   return bcrypt.compareSync(password, this.password);
};

userSchema.methods.hashPassword = function () {
   return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err1, salt) => {
         if (err1) {
            reject(err1);
         }
         bcrypt.hash(this.password, salt, (err2, hash) => {
            if (err2) {
               reject(err2);
            }
            this.password = hash;
            resolve(hash);
         });
      });
   });
};

userSchema.methods.toResponseObject = function () {
   return { ...this.toObject({ virtuals: true }), _id: undefined, password: undefined };
};

const User = mongoose.model("User", userSchema);

module.exports = User;
