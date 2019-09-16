import { model, Schema } from 'mongoose';

var UserSchema = new Schema({
    fullName: {
        type: String
    },
    usn: {
        type : String
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
        type : Date,
        default : new Date()
    }
});


export const User = model('User', UserSchema);
