"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * function connects to database
 * @param {URL} [url] url database connection url
 */
const connect = async (url = _config.config.dbURL) => {
  try {
    _mongoose.default.set('useNewUrlParser', true);

    _mongoose.default.set('useFindAndModify', false);

    _mongoose.default.set('useCreateIndex', true);

    await _mongoose.default.connect(url, {
      useNewUrlParser: true
    });

    _mongoose.default.connection.on("error", console.error.bind(console, "Connection error"));

    _mongoose.default.connection.once("open", () => {
      console.log("Connected to MongoDb");
    });
  } catch (err) {
    throw Error('Error Connecting to database!');
  }
};

exports.connect = connect;