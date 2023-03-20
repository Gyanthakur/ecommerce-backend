const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/Ecommerce"

mongoose.connect(mongoURI)
.then(()=> console.log("Database connected sucessfully"))
.catch(err => console.log("Error setting up database",err.message));