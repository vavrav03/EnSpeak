const express = require("express");
const bcrypt = require("bcryptjs");
const { requireAuth } = require("/src/middleware/auth");
const { User } = require("/src/database/schemas");
const { updateUserStatus } = require("/src/database/utils")

const router = express.Router();

module.exports = router;

router.get("/", requireAuth, (req, res) => {
   res.send({
      message: "User info successfully retreived",
      user: req.user.toResponseObject(),
   });
});

router.put("/password", requireAuth, (req, res) => {
   const { oldPassword, newPassword } = req.body;

   if (req.user.validPassword(oldPassword)) {
      bcrypt.genSalt(10, (err, salt) => {
         if (err) {
            res.status(400).send({ err, message: "Error updating password" });
         }
         bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) {
               res.status(400).send({ err, message: "Error updating password" });
            }
            User.findByIdAndUpdate({ _id: req.user._id }, { password: hash }, (err) => {
               if (err) {
                  res.status(400).send({ err, message: "Error updating password" });
               }
               res.status(200).send({ message: "Password successfully updated" });
            });
         });
      });
   } else {
      res.status(400).send({ message: "Old password did not match" });
   }
});

router.patch("/", requireAuth, (req, res) => {
   let newStatus;
   if (req.body.status === "online") {
      newStatus = "online";
   } else if (req.body.status === "idle") {
      newStatus = "idle";
   } else if (req.body.status === "offline") {
      newStatus = "offline";
   }
   updateUserStatus(req.user._id, newStatus, (err, user) => res.send({user: user}))
});
