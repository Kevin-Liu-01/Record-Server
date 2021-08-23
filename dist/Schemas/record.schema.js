"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose')
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
mongoose_1.default.Promise = require('bluebird');
const RecordSchema = new Schema({
    person_name: String,
    person_position: String,
    person_level: String,
});
const RecordModel = mongoose_1.default.model('Record', RecordSchema);
// RecordModel.newMyFunc = ()=>{}
exports.default = RecordModel;
// module.exports.myFunc = ()=>{}
