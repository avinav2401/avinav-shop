const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api", router)

const PORT = 8080 || process.env.PORT


connectDB()

// Listen only if we are in a traditional server environment (not serverless)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log("connnect to DB")
        console.log("Server is running " + PORT)
    })
}

module.exports = app;
