"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
const config = {
  port: 9000,
  dbURL: 'mongodb://localhost:27017/cyberKle',
  hostURL: '0.0.0.0',
  passcodeTTL: 600
};
exports.config = config;