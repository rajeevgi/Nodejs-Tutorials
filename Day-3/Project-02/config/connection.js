const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Mongodb connected successfully..'))
.catch((err) => console.log(`can't establish connection!`, err))

module.exports = connection;
