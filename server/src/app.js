const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const healthRoutes = require("./routes/healthroutes")

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use("/health", healthRoutes)

module.exports = app
