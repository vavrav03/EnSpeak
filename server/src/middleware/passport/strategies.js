const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const { User } = require("/src/database/schemas");
const { updateUserStatus } = require("/src/database/utils");

// const Strategies = module.exports;
const Strategies = {};

Strategies.local = new LocalStrategy(
   {
      usernameField: "email",
      passwordField: "password",
   },
   (email, password, done) => {
      User.findOne({ email }, (err, user) => {
         if (err) {
            return done(err);
         }
         if (!user) {
            return done(null, false, { message: "Email doesn't exist" });
         }
         if (!user.auth.local.password) {
            return done(null, false, {
               message: "Login in with appropriate social provider or register",
            });
         }
         if (!user.isPasswordValid(password)) {
            return done(null, false, { message: "Incorrect email or password" });
         }
         updateUserStatus(user.id, "online", (err, user) => done(null, user));
      });
   }
);

Strategies.google = new GoogleStrategy(
   {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      proxy: true,
   },
   (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      const { id, emails, name, photos } = profile;
      const email = emails[0].value;
      const { givenName, familyName } = name;
      const profilePicture = photos[0].value;
      User.findOne({ email: email }).then((currentUser) => {
         if (currentUser) {
            if (!currentUser.auth.google.id) {
               currentUser.auth.google.id = id;
               currentUser.auth.google.token = accessToken;
               currentUser.first_name = givenName;
               currentUser.last_name = familyName;
               currentUser.profile_picture = profilePicture;
               currentUser.save();
            }
            updateUserStatus(currentUser.id, "online", (err, user) => done(null, user));
         } else {
            const newUser = new User({
               email: email,
               first_name: givenName,
               last_name: familyName,
               profile_picture: profilePicture,
               auth: {
                  google: {
                     id: id,
                     accessToken: accessToken,
                  },
               },
            });

            newUser.save((err) => {
               if (err) {
                  throw err;
               }
               updateUserStatus(currentUser.id, "online", (err, user) => done(null, user));
            });
         }
      });
   }
);

Strategies.facebook = new FacebookStrategy(
   {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/api/auth/facebook/callback",
      proxy: true,
      profileFields: ["id", "emails", "name", "displayName", "photos"],
   },
   (accessToken, refreshToken, profile, done) => {
      const { id, emails, name, photos } = profile;
      const email = emails[0].value;
      const { givenName, familyName } = name;
      const profilePicture = photos[0].value;
      User.findOne({ email: email }).then((currentUser) => {
         if (currentUser) {
            if (!currentUser.auth.facebook.id) {
               currentUser.auth.facebook.id = id;
               currentUser.auth.facebook.token = accessToken;
               currentUser.first_name = givenName;
               currentUser.last_name = familyName;
               currentUser.profile_picture = profilePicture;
               currentUser.save();
            }
            
            updateUserStatus(currentUser.id, "online", (err, user) => done(null, user));
         } else {
            const newUser = new User({
               email: email,
               first_name: givenName,
               last_name: familyName,
               profile_picture: profilePicture,
               auth: {
                  facebook: {
                     id: id,
                     accessToken: accessToken,
                  },
               },
            });

            newUser.save((err) => {
               if (err) {
                  throw err;
               }updateUserStatus(currentUser.id, "online", (err, user) => done(null, user));
            });
         }
      });
   }
);

module.exports = Strategies;
