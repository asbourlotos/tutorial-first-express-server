const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: alexander.bourlotos@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("My name is Alex. I'm a full stack Web Developer.");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Coffee</li></ul>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});