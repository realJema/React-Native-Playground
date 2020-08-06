/*
 * Title: NATIVE News API Script
 * author: @realjema
 * date: 04/08/2020
 * description: NATIVE News api script containing the informations fetching routes for all the projects on the main website [naite237.com]
 */

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');

// data schemas
const News = require("./models/news_posts");

// Import the library:
var cors = require('cors');
const app = express();
// Then use it before your routes are set up:
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// local database
const mongo_uri = 'mongodb://localhost/nativenews';

// function to get the time for every fetch 
function getCurrentTime() {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  return dateTime;
};
  
  
mongoose.connect(
  mongo_uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      throw err;
    } else {
      console.log(`Successfully connected to ${mongo_uri}`);
    }
  }
);

app.use(express.static(path.join(__dirname, 'public')));

/* * * * * * * * * * * * * * * * * * * * * * * * *
 *                    ROUTES                     *
 * * * * * * * * * * * * * * * * * * * * * * * * */

/*
  Route: /native/api/news
  Type: GET
  Description: Default route displaying information about api
*/
app.get('/native/api/news', function (req, res) {
  res.status(200).send("Welcome to the NATIVE News api!");
});
/*
  Route: /native/api/news/data
  Type: GET
  Description: get the data for the nes app project
*/
app.get('/native/api/news/data', function (req, res) {
  News.find(function (err, posts) {
    if (err) {
      res.status(401).send("Internal Server Error");
    } else {
      // sending all the posts fetch from the database
        console.log("[/native/api/news/data] - Data fetched");
      res.status(200).send(posts);
    }
  });
});
/*
  Route: /native/api/news/filter
  Type: POST
  Description: get the data for the news app project
*/
app.post('/native/api/news/filter', function (req, res) {
  var value = req.body.category;
  News.find({ category: value }, function (err, posts) {
    if (err) {
      res.status(401).send("Internal Server Error");
    } else {
      // sending all the jobs fetch from the database
        
      console.log("["+ getCurrentTime() + "] - Filtered Data fetched");
      res.status(200).send(posts);
    }
  });
});
/*
  Route: /native/api/news/article
  Type: POST
  Description: get the data for a single article 
*/
app.post('/native/api/news/article', function (req, res) {
  var value = req.body.articleID;
  News.findOne({ _id: value }, function (err, posts) {
    if (err) {
      res.status(401).send("Internal Server Error");
    } else {
      // sending all the jobs fetch from the database
        
      console.log("["+ getCurrentTime() + "] - Article Data fetched");
      res.status(200).send(posts);
    }
  });
});
/* * * * * * * * * * * * * * * * * * * * * * * * *
*  end: Finder Routes
* * * * * * * * * * * * * * * * * * * * * * * * */
// listening on this port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
