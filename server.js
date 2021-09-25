const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
require("dotenv").config()


app.use(bodyParser.json());
app.use(cors());



//connect db
const db = require('./database/database')
db.connect();


//api
const todolist = require('./api/todolist');
app.use('/api/todolist', todolist);





const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})


// 

