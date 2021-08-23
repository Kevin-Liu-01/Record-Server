"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const record_schema_1 = __importDefault(require("../Schemas/record.schema"));
class RecordController {
}
const controller = new RecordController();
/* Create */
controller.Displayall = function (req, res) {
    console.log("#####################");
    record_schema_1.default.find({}).exec().then((result) => {
        return res.json(result);
    }).catch((error) => {
        return res.json(error);
    });
    // let db_connect = dbo.getDb("employees");
    // db_connect
    //   .collection("records")
    //   .find({})
    //   .toArray(function (err, result) {
    //     if (err) throw err;
    //     res.json(result);
    //   });
};
/* Retrieve */
controller.Create =
    // function (req, res) {
    //     let db_connect = dbo.getDb("employees");
    //     let myobj = {
    //       person_name: req.body.person_name,
    //       person_position: req.body.person_position,
    //       person_level: req.body.person_level,
    //     };
    //     db_connect.collection("records").insertOne(myobj, function (err, res) {
    //       if (err) throw err;
    //     });
    async function (req, res) {
        console.log("#####################");
        const myObj = new record_schema_1.default({
            person_name: req.body.person_name,
            person_position: req.body.person_position,
            person_level: req.body.person_level,
        });
        try {
            let result = await myObj.save();
            console.log("TIMEIEMIEIEOEOIE");
            // await new Promise(resolve => setTimeout(resolve, 5000));
            return res.json(result);
        }
        catch (err) {
            return res.json(err);
        }
        // return await myObj.save().then(result => {
        //   return res.json(result)
        // }).catch(error => {
        //   return res.json(error)
        // })
    };
controller.Update = function (req, res) {
    // let db_connect = dbo.getDb("employees");
    // let myquery = { id: req.body.id };
    // let newvalues = {
    //   $set: {
    //     person_name: req.body.person_name,
    //     person_position: req.body.person_position,
    //     person_level: req.body.person_level,
    //   },
    // };
    // db_connect
    //   .collection("records")
    //   .updateOne(myquery, newvalues, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document updated");
    //   });
    console.log("updating");
    return record_schema_1.default.findOneAndUpdate({ _id: req.params.id }, { $set: {
            person_name: req.body.person_name,
            person_position: req.body.person_position,
            person_level: req.body.person_level,
        } }).exec().then((result) => {
        return res.json(result);
    }).catch((error) => {
        return res.json(error);
    });
};
controller.DisplayOne = (req, res) => {
    // const id = req.params.id;
    // console.log("/record/:id is called with id=" + id)
    // let db_connect = dbo.getDb("employees");
    // var o_id = new mongo.ObjectID(id);
    // var myquery =  {"_id" : o_id} ;
    // // /*var myquery =  {"_id" : id} ;
    // // var myquery = { id: req.body.id };*/
    // db_connect.collection("records").findOne(myquery, function (err, obj) {
    //   if (err) { 
    //   console.log("get failed" + err);
    //   throw err;
    // }
    // console.log("obj : " + obj)
    //   // res.json(obj);
    //   console.log("/record/:id was called with id=" + id)
    //   return res.json(obj);
    // });}
    console.log("returning");
    return record_schema_1.default.findById(req.params.id).then((result) => {
        return console.log(res.json(result));
    }).catch((error) => {
        return res.json(error);
    });
};
// RecordModel.GetRecord=(req, res) => {
// const id = req.params.id;
// console.log("/:id is called with id=" + id)
// let db_connect = dbo.getDb("employees");
// var myquery = { id: req.body.id };
// db_connect.collection("records").findOne(myquery, function (err, obj) {
//   if (err) { 
//   console.log("get failed" + err);
//   throw err;
// }
// console.log("obj : " + obj)
//   // res.json(obj);
//   console.log("/:id was called with id=" + id)
//   return res.json(obj);
// });
// }
controller.DeleteRecord = (req, res) => {
    console.log("Document deleting: " + req.params.id);
    //   const id = req.params.id;
    //   let db_connect = dbo.getDb("employees");
    //   console.log("befpre query" + id);
    //   var myquery = { id: req.body.id };
    //   console.log("1 document wiil be deleted: " +    req.body.id );
    //   console.log("1 document wiil be deleted: " +  (req));
    //   db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    //     if (err) throw err;
    //      console.log("1 document deleted" );
    //   });
    // }
    return record_schema_1.default.findByIdAndRemove(req.params.id).exec().then((result) => {
        return res.json(result);
    }).catch((error) => {
        return res.json(error);
    });
};
module.exports = controller;
