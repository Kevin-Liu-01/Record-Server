// const mongoose = require('mongoose')
import  mongoose from 'mongoose'

const Schema = mongoose.Schema
mongoose.Promise = require('bluebird')

const RecordSchema = new Schema({
    person_name: String,
    person_position: String,
    person_level: String,
})

const RecordModel = mongoose.model('Record', RecordSchema)

// RecordModel.newMyFunc = ()=>{}
export default RecordModel

// module.exports.myFunc = ()=>{}