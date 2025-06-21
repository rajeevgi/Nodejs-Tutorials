const userModel = require('../models/users');
const userValidator = require('../validators/userValidator');

exports.addUser = (req, res) => {
    // Joi validation
    const { error, value } = userValidator.addUserSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    // Save to DB
    userModel.addUser(value, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({ message: "User registered successfully", result });
    });
};
