import user from '../models/user.js';


const createUser = async (req, res)=>{
    console.log(req.body);
    const newUser = await user.create(req.body);
    res.json(newUser)
}

export { createUser };