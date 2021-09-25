const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
require("dotenv").config()


app.use(bodyParser.json());
app.use(cors());

//api



const todolist = require('./api/todolist');
app.use('/api/todolist', todolist);


//connect db
const db = require('./database/database')
db.connect();


// ... other app.use middleware 
if(process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname, "client", "build"))) 
}

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})


// 

