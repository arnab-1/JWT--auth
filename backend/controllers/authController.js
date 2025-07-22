const bcrypt = require('bcryptjs');
const users = require('../User');

const register = async (req,res) => {
    const { username, password} = req.body;
    // I will check wheather user already exist in DB, if yes then send the response that already exist
    const existing = users.find(user => user.username === username);
    if(existing ) return res.status(400).json({ message : 'User Already exist'});
    
    const hashed = await bcrypt.hash(password,10);
    users.push({username, password : hashed});
    res.status(200).json({ message : 'User Resgister Successfully'});
};

const login = (req, res) => res.send({message : 'Login Not implementated yet'});
const profile = (req,res) => res.send({ message : 'Profile not yet implemented'});

module.exports = {
    register,
    login ,
    profile
}