
import express from "express";
import bodyParser from "body-parser";
const cors = require('cors');

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json)

export default app