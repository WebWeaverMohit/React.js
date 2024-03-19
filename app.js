require("dotenv").config({ path: "./.env" })
const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
require('./models/dbconfig').dbconnection()

const logger = require('morgan')
app.use(logger("tiny"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/user/", userRouter)
app.all("*", function (req, res, next) {
    res.status(404).json({
        success: false,
        message: `${req.url} route not found`
    })
})

// const PORT = process.env.PORT

app.listen(process.env.PORT, () => {
    console.log(`the server is running on port ${process.env.PORT}`)
})

// mongodb+srv://mohit1234:<password>@cluster0.2kavans.mongodb.net/