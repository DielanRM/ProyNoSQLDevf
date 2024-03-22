import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    dni: String,
    name: String,
    last_name: String,
    birthdate: String,
    role: String,
    phone: String,
    mail: String,
    password:String,
    username: String,
});

export default mongoose.model('User', userSchema);