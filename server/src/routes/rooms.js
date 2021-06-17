const express = require("express");
const bcrypt = require("bcryptjs");
const { requireAuth } = require("/src/middleware/auth");
const { User, Room } = require("/src/database/schemas");
const { updateUserStatus } = require("/src/database/utils");

const router = express.Router();

module.exports = router;

router.get("/", requireAuth, (req, res) => {
   Room.find({}).populate("owner").then((rooms) => {
      res.send({ rooms });
   });
});

router.get("/own", requireAuth, (req, res) => {
   Room.find({owner: req.user._id}).then((rooms) => {
      res.send({ rooms });
   });
})

router.post("/", requireAuth, (req, res) => {
   const newRoom = Room({owner: req.user._id, meeting_time: req.body.meeting_time})
   newRoom.save((err, room) => {
      Room.populate(room, {path:"owner"}, (err, populatedBook) => {
         res.status(200).send({room});
      });
   });
});
