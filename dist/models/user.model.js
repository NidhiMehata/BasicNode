"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _mongoose = require("mongoose");

var UserSchema = new _mongoose.Schema({
  fullName: {
    type: String
  },
  usn: {
    type: String
  },
  branch: {
    type: String
  },
  year: {
    type: Number
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  date: {
    type: Date,
    default: new Date()
  }
});
const User = (0, _mongoose.model)('User', UserSchema);
exports.User = User;