const express = require("express");
const { handlebars } = require("hbs");

const app = express();
const port = 3008;

const mysql = require("./connection").connectig

// configration

app.set("view engine","hbs");
app.set("views","./views");
app.use(express.static(__dirname + "/public"));




//routing

app.get("/", (req, res) => {
    res.render("index");

});
app.get("/Login", (req, res) => {
    res.render("Login");

});
app.get("/SignUp", (req, res) => {
    res.render("SignUp");

});
app.get("/manage", (req, res) => {
    res.render("manage");

});
app.get("/userlist", (req, res) => {
    res.render("userlist");

});
app.get("/adduser", (req, res) => {
    res.render("manage");

});
app.get("/viewuser", (req, res) => {
    res.render("viewuser");

});
app.get("/edituser", (req, res) => {
    res.render("edituser");

});
app.get("/deleteuser", (req, res) => {
    res.render("deleteuser");

});

// creating sserver
app.listen(port, (err) => {
    if (err)
        throw err
    else
        console.log(`server is runing at ${port}`);
});