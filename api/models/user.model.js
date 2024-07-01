import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String, 
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps: true} ); // the rules and conditions that we want to add for the user, each user has 2 extra in formation the time of creation and the time of edit

const User = mongoose.model('User', userSchema);

export default User; // to use anywhere in the application