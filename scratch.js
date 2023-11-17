// npm init -y 
// new npm project

//npm install express cors
//npm install --save-dev nodemon 
    //what we installed: 
        //express: The backend web framework for generating a web server
        //cors: middleware to make sure we don't get cors errors when our react app makes a request to our express app 
        //nodemon development tool to auto restart our server whenever


//projects.json
    //this file is an array of objects that represent your projects.

//about.json
    //this file will be one big option with information about you to use in your portfolio.

//server.js
    // here is an overview of what we need to do
        // import our dependencies and json files
        //create our app object
        //add our cors middleware
        //create a home route to test our app
        //create a /projects route to retrieve our projects
        //create an about route to retrieve our about info 
        //setup our server listener 