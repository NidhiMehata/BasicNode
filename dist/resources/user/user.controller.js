"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = exports.saveUser = void 0;

var _user = require("../../models/user.model");

const saveUser = async (req, res) => {
  try {
    console.log("ok");
    var user = new _user.User(req.body);
    console.log(user);
    user.save((err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log('Error in Save');
      }
    });
  } catch (error) {
    return res.status(500).send({
      error
    });
  }
};

exports.saveUser = saveUser;

const getUsers = async (req, res) => {
  console.log("IIN");

  try {
    var user = await _user.User.find({});
    res.send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error
    });
  }
};

exports.getUsers = getUsers;