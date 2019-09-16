"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _bodyParser = require("body-parser");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _config = require("./config");

var _user = require("./resources/user/user.router");

var _db = require("./utils/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)('dev'));
app.use('/api', _user.userRouter);
/**
 * function connects to database and starts http server on configured port and hostname
 */

const start = async () => {
  try {
    await (0, _db.connect)();
    await app.listen(_config.config.port, _config.config.hostURL);
    console.log(`REST API on http://localhost:${_config.config.port}/api`);
  } catch (err) {
    console.error(err);
  }
};

exports.start = start;
start();