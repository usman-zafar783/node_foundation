const express = require("express")
const dotenv = require('dotenv').config()
const port = process.env.port || 5000;
const app = express();



app.use('/api/goals', require('./routes/goalsRoute'))



app.listen(port, ()=> console.log(`server started at ${port}`));


