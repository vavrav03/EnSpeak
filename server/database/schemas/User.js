const mongoose = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema(
   {
      givenName: {
         type: String,
         required: true,
      },
      familyName: {
         type: String,
         required: true,
      },
      password: { type: String, required: true },
      profile_pic: { type: String },
      bio: { type: String, maxlength: 240 },
      created_at: { type: Date, default: Date.now, immutable: true },
      updated_at: { type: Date },
   },
   { versionKey: false }
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
   if (this.given_name && this.family_name) {
      return `${this.given_name} ${this.family_name}`;
   }
   if (this.given_name && !this.family_name) {
      return this.given_name;
   }
   if (!this.given_name && this.family_name) {
      return this.family_name;
   }
   return undefined;
});

userSchema.virtual("initials").get(function () {
   return (
      this.given_name &&
      this.family_name &&
      `${this.given_name[0].concat(this.family_name[0]).toUpperCase()}`
   );
});

userSchema.methods.validPassword = function (password) {
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

userSchema.methods.hidePassword = function () {
   // return R.omit(["password", "_id"], this.toObject({ virtuals: true }));
};

const User = mongoose.model("User", userSchema);

module.exports = User;
