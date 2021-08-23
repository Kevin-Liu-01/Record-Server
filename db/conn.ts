
const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://mern:mongodb@cluster0.prjff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// var _db;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db)
//       {
//         _db = db.db("myFirstDatabase");
//         console.log("Successfully connected to MongoDB."); 
//       }
//       return callback(err);
//          });

//       // initMongoose();   
//   },

//   getDb: function () {
//     return _db;
//   },
// };


var mongoose = require('mongoose')

// const initMongoose = () => {
mongoose.Promise = require('bluebird')

const option = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

mongoose.connect('mongodb+srv://mern:mongodb@cluster0.prjff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', option)
	.then(() => {
		console.log('Mongoose init  success')
	}).catch((err:any) => {
		console.log('Mongoose init error: ' + err);
	})

// }