import express from "express";
var mongo = require('mongodb');

var controller = require('../Models/record.model')

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(controller.Displayall);

// This section will help you create a new record.
recordRoutes.route("/record/add").post(controller.Create);

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(controller.Update);

// This section will make a request
recordRoutes.route("/record/:id").get(controller.DisplayOne);


// This section will make a request
// recordRoutes.route("/:id").get(controller.GetRecord);


// This section will help you delete a record
recordRoutes.route("/:id").delete(controller.DeleteRecord);

recordRoutes.route("/delete/:id").post(controller.DeleteRecord);


module.exports = recordRoutes;
