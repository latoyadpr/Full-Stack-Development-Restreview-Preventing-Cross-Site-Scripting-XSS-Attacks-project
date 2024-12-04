const express = require("express");
const session = require("express-session");
// Require new packages below

// Add the 'check' function below:
const { validationResult } = require("express-validator");

const PORT = process.env.PORT || 4001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set('trust proxy', 1)
// Add helmet below

app.use(
  session({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 300000000, 
      sameSite: 'none',
      // Add the appropiate properties below:

    },
  })
);

app.get("/", (req, res) => {
  res.render("home");
});

// Endpoint in development
app.post(
  "/review",
  [
    // Add the middleware to validate email and restaurant info below:
    
  ],
  (req, res) => {
    var errors = validationResult(req).array();
    console.log(`Errors found: ${JSON.stringify(errors)}`);
    if (errors.length >= 1) {
      res.redirect("/error");
    } else {
      console.log("Data was valid!");
      res.redirect("/success");
    }
  }
);

app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/error", (req, res) => {
  res.render("error");
});

app.listen(PORT, () =>
  console.log(`The server is listening at port: http://localhost:${PORT}`)
);


const { methodName1, methodName2 } = require("package");


body('input').function1().function2()


body('input').function1().function2()

<div id="urlinfo"></div>


document.getElementById("urlinfo").textContent = document.baseURI;


cookie: {
  maxAge: 300000000,
  sameSite: 'none',
  secure: true,    // Ensures the cookie is sent over HTTPS
  httpOnly: true,  // Prevents client-side access to the cookie
}

app.use(helmet());

