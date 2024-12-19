if(process.env.NODE_ENV !="production") {
  require("dotenv").config();
}
console.log(process.env.SECRET);


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js")
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const {isLoogedIn} = require("./middleware.js");




//This part is seprated because of router
// const {listingSchema, reviewSchema} = require("./schema.js");
// const Review = require("./models/review.js");
// const Listing = require("./models/listing.js"); 
// const wrapAsync = require("./utils/wrapAsync.js")

//This is require for seprate router
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname, "/public")));




const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("ERROR in MONGO SESSION STORE", err);
});


const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};


// app.get("/", async (req, res) => {
//   res.send("WanderLust");
// });


app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success"); // Set 'success' flash message to res.locals
  res.locals.error = req.flash("error"); // Set 'success' flash message to res.locals
  res.locals.currUser = req.user;
  next(); // Call next middleware
});

// app.get("/demouser", async (req, res) => {
//   let fakeUser = new User({
//     email: "student1@gmail.com",
//     username: "delta-student1"
//   });
  
//    let registerUSer = await User.register(fakeUser, "helloworld");
//    res.send(registerUSer);
//    console.log("Uesr record saved");
// });

//This line for use routes for listings
app.use("/listings", listingsRouter);
//This line for use routes for reviews
app.use("/listings/:id/reviews", reviewsRouter);
//This line for use routes for reviews
app.use("/", userRouter);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!!"));  // Forwarding error with 404 status
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error", { err });
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});

