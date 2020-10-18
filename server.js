const express = require("express")
const dotenv = require ("dotenv")
const morgan = require("morgan")
const connectDB = require('./config/db')

// Load the config file(env vars)
dotenv.config({path:"./config/config.env"})

// Connect database
connectDB()

// route file
const bootcamps = require('./router/bootcamps')


const app = express();
// dev logging ,middelware
if(process.env.NODE_ENV === "devlopment"){
    app.use(morgan('dev'))
}


// mount routs
app.use('/api/v1/bootcamps',bootcamps)

const  PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// handle promise rejection

process.on("unhandledRejection", (err,promise) =>{
    console.log(`Error: ${err.message}`)

    // Close server & exit process
    server.close(()=>process.exit(1))
})