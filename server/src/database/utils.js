const { User } = require("./schemas");

const updateUserStatus = (id, status, callback) => {
   console.log(id, status)
   return User.findByIdAndUpdate(id, { $set: { status } }, { new: true }, callback);
};

module.exports = { updateUserStatus };
