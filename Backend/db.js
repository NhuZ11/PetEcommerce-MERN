const mongoose = require('mongoose')
require('dotenv').config()



const connectDb = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MONGODB is connected: ${connectionInstance.connection.name}`)
    } catch (error) {
        console.log("MONGODB connection failure", error);
    }
}

module.exports = connectDb