import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    /* 
    _id "f6963434-a077-41bb-9571-155b88cdfb39"
    name "Admin"
    email "admin@admin.com"
    password "admin" */
    name: {
        type: String,
        required: [true, "Name is required"],
        min: 6,
        max: 255
    },
    email:{
        type: String,
        required: [true , "Email is required"],
        min: 6,
        max: 255
    },
    password:{
        type:String,
        required: [true , "Password is required"],
        min: 6,
        max: 1024
    },
});
const User = mongoose.model('User', userSchema);
export default User;