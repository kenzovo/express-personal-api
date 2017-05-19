// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md", // CHANGE ME
    baseUrl: "https://stark-wildwood-36615.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  })
});
// get profile
// app.get('/api/profile', function (req, res) {
//     var profile = {
//       name: 'Kenny Vo',
//       githubUsername: 'kenzovo',
//       githubLink:'https://github.com/kenzovo',
//       personalSiteLink: 'https://kenzovo.github.io/',
//       currentCity: 'Austin'
//     };
//
//     .exec(function(err, profile){
//       if (err) {return console.log(err)}
//     }
//       res.json(profile);
//     });
// });

// get projects
// app.get('/api/profile', function (req, res) {
//     var profile = {
//       name: 'Kenny Vo',
//       githubUsername: 'kenzovo',
//       githubLink:'https://github.com/kenzovo',
//       personalSiteLink: 'https://kenzovo.github.io/',
//       currentCity: 'Austin'
//     };
//
//     .exec(function(err, profile){
//       if (err) {return console.log(err)}
//     }
//       res.json(profile);
//     });
// });
//

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
