// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    app.get("/api/all", function(req, res) {

        // Finding all bathroom locations, and then returning them to the user as JSON.
        Location.findAll({}).then(function(results) {
          res.json(results);
        });
      }
      
        // Get rotue for retrieving a single post
    app.get("/api/posts/:lat-long", function(req, res) {
          //Checks to see if the physical location is already in the database
          db.Post.findOne({
            where: {
              lat: req.params.lat,
              long: req.parms.long
          }).then(function(dbPost) {
            res.json(dbPost);
          })
        })
      )};

        app.get("/api/posts/:closed", function(req, res) {
          //Returns locations where users have marked them closed
          db.Post.findOne({
            where: {
              closed: "true"
          }).then(function(dbPost) {
            res.json(dbPost);
          });
        });
      
        // POST route for saving a new locations
        app.post("/api/posts", function(req, res) {
          db.Post.create(req.body).then(function(dbPost) {
            res.json(dbPost);
          });
        });
      
        // DELETE route for deleting locations
        app.delete("/api/posts/:id", function(req, res) {
          db.Post.destroy({
            where: {
              id: req.params.id
            }
          }).then(function(dbPost) {
            res.json(dbPost);
          });
        });
      
        // PUT route for updating posts
        app.put("/api/posts", function(req, res) {
          db.Post.update(
            req.body,
            {
              where: {
                long: req.body.long,
                lat: req.body.lat
              }
            }).then(function(dbPost) {
              res.json(dbPost);
            });
        });
    )};