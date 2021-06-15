const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const uuid = require("uuid");
const mongoose = require("mongoose");

const Strategies = require("./strategies");
const { User } = require("/src/database/schemas");

module.exports = (app) => {
   app.use(
      session({
         store: new MongoStore({
            mongooseConnection: mongoose.connection,
            clear_interval: 3600,
            collection: "sessions",
         }),
         genid: () => uuid.v4(),
         secret: process.env.SESSION_SECRET,
         cookie: { maxAge: 24 * 60 * 60 * 1000 },
         resave: false,
         saveUninitialized: false,
      })
   );
   app.use(passport.initialize());
   app.use(passport.session());

   passport.serializeUser((user, done) => {
      done(null, user.id);
   });

   passport.deserializeUser((id, done) => {
      User.findById({ _id: id })
         .then((user) => done(null, user))
         .catch((err) => console.warn(`err at deserialize: ${err}`));
   });

   passport.use(Strategies.local);
   passport.use(Strategies.google);
   passport.use(Strategies.facebook)
};
