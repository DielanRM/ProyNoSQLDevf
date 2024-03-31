import movie from '../models/movie.js'

const createMovie = async (req, res)=>{
     // name: 'Leo',
        // director: 'Adam Sandler',
        // releaseDate: '02/18/2023',
        // movieRating: '80',
        // duration: '180 minutos',
        // genre: 'comedy',
        console.log(req.body);
    const newCar = await movie.create(req.body);
    res.json(newCar)
};


export { createMovie };