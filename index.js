const express = require("express");
const path = require("path");// the path module contains useful methods for manipulating file paths

//SET UP EXPRESS APP
const app = express(); //create an Express application
const port = process.env.PORT || "8888"; //set up a port number to run the application from 

//SET UP EXPRESS APP TO USE PUG AS A TEMPLATE ENGINE
app.set("views", path.join(__dirname, "template")); //the first view is the setting name  (express setting to the path to the folder constaing the template files), the second is the folder name (template)
app.set("view engine", "pug"); // the pug is from the package which is name "pug". set expres to use "pug" as the template engine (setting: "view engine")


//Set up the folder pathh for static files ( example CSS , Client side JS, Image files)
app.use(express.static(path.join(__dirname, "public")))

//PAGE ROUTES
app.get("/", (request, response) => {
    // response.status(200).send("Hello again!");
    // let test = {
    //     message: "Hello!"
    // };
    // response.json(test);
    response.render("index", { title: "Home"}); // renders /templates.layout.pug
});

app.get("/about", (request, response) => {
    response.render("about", {title: "about"}); //this is for the about page
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})


