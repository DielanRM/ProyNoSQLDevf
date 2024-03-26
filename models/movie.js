import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        require: [true, 'We need to know its name']
        },
    director: String,
    releaseDate: String,
    movieRating: String,
    duration: String,
    genre:String,
});

export default mongoose.model('Movie', movieSchema);