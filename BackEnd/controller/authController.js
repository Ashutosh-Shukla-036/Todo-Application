const { ValidateUser, User } = require("../models/user")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.SignUp = async (req,res) => {
    const Validate = ValidateUser.safeParse(req.body);

    if (!Validate.success) {
        return res.status(400).json({
            errors: Validate.error.errors
        });
    }    

    const { username , email , password } = Validate.data;

    try {
        const exitingUser = await User.findOne({email});

        if (exitingUser) {
            return res.status(400).json({ message: 'User already exists'});
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json("New user created");
    } catch(error) {
        res.status(500).json({ message: `Internal server error ${error.message}` });
    }
}

exports.Login = async (req,res) => {
    const { email , password } = req.body;

    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({message: 'No user with this email'});
        }
        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Not authorised'});
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SCREAT_KEY, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch(error) {
        res.status(500).json({ message: `Internal server error ${error.message}` });
    }
}