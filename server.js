
const express = require("express")

const dotenv = require ("dotenv")

const morgan = require("morgan")
// route file
const bootcamps = require('./router/bootcamps')

// Load the config file(env vars)
dotenv.config({path:"./config/config.env"})

const app = express();
// dev logging ,middelware
if(process.env.NODE_ENV === "devlopment"){
    app.use(morgan('dev'))
}


// mount routs
app.use('/api/v1/bootcamps',bootcamps)

const  PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));