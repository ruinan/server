const mongoose = require('mongoose');

const connect = function () {
    mongoose.connect("mongodb://localhost:27017/record",  { useNewUrlParser: true });
    const db = mongoose.connection;
    // connection failed
    db.on("error", function (error) {  
        console.log("DB conection error:" + error); 
    }); 
    // connnection succeeded
    db.on("open", function () {  
        console.log("DB connection succeeded!");
    });
}

module.exports = connect;