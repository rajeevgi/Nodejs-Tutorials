const User = require('../model/User');

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const userObj = await User.create({ username, email, password });

    if(!userObj){
        res.status(400).json({ message : "Bad Request! "});
    }

    res.status(201).json({ message : "User registered Successfully...", userObj });
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const isUser = await User.findOne({ email, password });

    if(!isUser){
        return res.status(400).json({ message : "Invalid credentials"});
    }

    req.session.user = {
        _id : User._id,
        username : User.username,
        email: User.email,
    }

    res.status(200).json({ message : "User Loginned Successfully...", user: isUser });
}
