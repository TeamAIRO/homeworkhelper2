"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

class Assignment{
  constructor(subject, date, type){
    this.subject = subject;
    this.date = date;
    this.type = type;
    var priority = 4 * date;
  }
  
}

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/hw", function(req, res) {
  var type1 = req.body.queryResult.parameters.type1;
  var type2 = req.body.queryResult.parameters.type2;
  var type3 = req.body.queryResult.parameters.type3;
  var type1 = req.body.queryResult.parameters.type1;
  var subject1 = req.body.queryResult.parameters.subject1;
  var subject2 = req.body.queryResult.parameters.subject2;
  var subject3 = req.body.queryResult.parameters.subject3;
  var date1 = req.body.queryResult.parameters.date1;
  var date2 = req.body.queryResult.parameters.date2;
  var date3 = req.body.queryResult.parameters.date3;
  var speech =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.type1 
      ? req.body.queryResult.parameters.type1
      : "Seems like some problem. Speak again.";
  return res.json({
    fulfillmentText: speech,
    source: "webhook-echo-sample"
  });
});

restService.post("/echo", function(req, res) {
  var speech =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.firstName 
      ? req.body.queryResult.parameters.firstName + " " + req.body.queryResult.parameters.lastName
      : "Seems like some problem. Speak again.";
  return res.json({
    fulfillmentText: speech,
    source: "webhook-echo-sample"
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
