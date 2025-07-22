const bcrypt = require('bcryptjs');
const users = require('../User');
const jwt = require('jsonwebtoken');


const register = async (req,res) => {
    const { username, password} = req.body;
    // I will check wheather user already exist in DB, if yes then send the response that already exist
    const existing = users.find(user => user.username === username);
    if(existing ) return res.status(400).json({ message : 'User Already exist'});
    
    const hashed = await bcrypt.hash(password,10);
    users.push({username, password : hashed});
    res.status(200).json({ message : 'User Resgister Successfully'});
};


// 1st i will check the use exit in DB or not if not then response will be not registered
// if exist then I will compare with respective user's password and check 
// if Passaward match -> login response will be successfully login
// if does not match then will send respose as wrong passward;
const login = async (req, res) => {
    const { username, password } = req.body;
    // will check whether user exist or not
    const user = users.find(user => user.username === username);
    if( !user)  res.status(400).send({ message : 'User Not registered'});

    // Now User exist till here, now will check where password match or not 
    const isMatch = await bcrypt.compare(password,user.password);
    if( !isMatch)  res.status(400).json({ message : 'Wrong Password'});

    const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn : '1h'});

    res.json({token, message : 'Login successfully' });
}
const profile = (req,res) => res.send({ message : 'Profile not yet implemented'});

module.exports = {
    register,
    login ,
    profile
}