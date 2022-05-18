const mongoose = require("mongoose")

class mongo{
    constructor(){
        this.createMongoConnection()
    }

    createMongoConnection(){

        mongoose.connect('mongodb+srv://gauri:gauri123@cluster0.7ylq4.mongodb.net/?retryWrites=true&w=majority')
        mongoose.connection.once('open',()=>{
            console.log("MongoDB is connected")
        })
        mongoose.connection.on('error',()=>{
            console.log("error is occured")
        })
    }
}

module.exports =  mongo