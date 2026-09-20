import express = require("express");
import session = require("express-session");
import cookieParser = require("cookie-parser");
import path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000
    }
  })
);

const authMiddleware = (req: any, res: any, next: any) => {
  const user = req.session.username;

  if (user) {
    next();
  } else {
    res.redirect("/login");
  }
};

app.get("/login", (req: any, res: any) => {
  res.render("login", {
    error: null
  });
});

app.post("/login", (req: any, res: any) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    req.session.username = username;

    res.cookie(
      "lastVisit",
      new Date().toLocaleTimeString()
    );

    res.redirect("/dashboard");
  } else {
    res.render("login", {
      error: "Invalid credentials"
    });
  }
});

app.get(
  "/dashboard",
  authMiddleware,
  (req: any, res: any) => {
    const user = req.session.username;
    const lastVisit = req.cookies.lastVisit || "First time";

    res.render("dashboard", {
      user,
      lastVisit
    });
  }
);

app.get("/logout", (req: any, res: any) => {
  req.session.destroy((err: any) => {
    if (err) {
      res.status(500).send("Logout failed");
      return;
    }

    res.clearCookie("connect.sid");
    res.redirect("/login");
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/login");
});
