import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: String,
    director: String,
    releaseDate: String,
    movieRating: String,
    duration: String,
    genre: String,
});

export default mongoose.model('Movie', movieSchema);