const express = require("express");
const passport = require("passport");
const { User } = require("../database/schemas");

const router = express.Router();

module.exports = router;

router.post("/register", (req, res) => {
   if (!req || !req.body || !req.body.email || !req.body.password) {
      res.status(400).send({ message: "Username and Password required" });
   }

   const { first_name, last_name, email, password } = req.body;

   const newUser = User({
      ...req.body,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
   });
   User.find({ email }, (err, users) => {
      if (err) {
         res.status(400).send({ message: "Creating user failed", err });
      }
      if (users[0]) {
         res.status(400).send({ message: "Username exists" });
      }

      newUser.hashPassword().then(() => {
         newUser.save((err, savedUser) => {
            if (err || !savedUser) {
               res.status(400).send({ message: "Creating user failed", err });
            } else {
               res.send({
                  message: "User created successfully",
                  data: newUser.toResponseObject(),
               });
            }
         });
      });
   });
});

router.post("/login", (req, res, next) => {
   const { email, password, rememberMe } = req.body;

   passport.authenticate("local", (err, user, info) => {
      if (err) {
         return next(err);
      }
      if (!user) {
         return res.status(401).send(info);
      }

      req.login(user, (err) => {
         if (err) {
            res.status(401).send({ message: "Login failed", err });
         }
         res.send({
            message: "Logged in successfully",
            user: req.user.toResponseObject(),
         });
      });
   })(req, res, next);
});

router.get(
   "/google",
   passport.authenticate("google", {
      scope: ["profile", "email"],
   })
);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
   res.redirect("/profile");
});

router.get(
   "/facebook",
   passport.authenticate("facebook", {
      scope: ["email"],
   })
);
router.get("/facebook/callback", passport.authenticate("facebook"), (req, res) => {
   res.redirect("/profile");
});

router.post("/logout", (req, res) => {
   req.session.destroy((err) => {
      if (err) {
         res.status(400).send({ message: "Logout failed", err });
      }
      req.sessionID = null;
      req.logout();
      res.send({ message: "Logged out successfully" });
   });
});
