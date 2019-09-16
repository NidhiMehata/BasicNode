"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;

var _express = require("express");

var _user = require("./user.controller");

const userRouter = (0, _express.Router)();
exports.userRouter = userRouter;
userRouter.route('/saveUser').post(_user.saveUser);
userRouter.route('/users').get(_user.getUsers);