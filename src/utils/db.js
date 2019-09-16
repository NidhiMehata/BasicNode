import mongoose from 'mongoose';
import { config } from '../config';

/**
 * function connects to database
 * @param {URL} [url] url database connection url
 */
export const connect = async (url = config.dbURL) => {
  try {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    await mongoose.connect(url, {
      useNewUrlParser: true
    });
    mongoose.connection.on("error",console.error.bind(console,"Connection error"));
    mongoose.connection.once("open",() => {
        console.log("Connected to MongoDb");
    })
  } catch (err) {
    throw Error('Error Connecting to database!');
  }
};
