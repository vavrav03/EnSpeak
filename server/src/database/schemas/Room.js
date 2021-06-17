const mongoose = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;
const User = require("./User");

const roomSchema = Schema({
   owner: { type: Schema.Types.ObjectId, ref: 'User' },
   meeting_time: Date,
   link: {
      type: String,
      default: "#"
   }
 });

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;