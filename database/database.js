const mongoose = require('mongoose')
require("dotenv").config()

async function connect() {
    try {
        await mongoose.connect( process.env.MONGODB_URI
        , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         

          });
          console.log("connected database");
    }
    catch(error){
        console.log("connect database failed")
    }
}



module.exports = {connect};



    