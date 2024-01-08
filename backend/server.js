const express = require('express')
const app = express()
const connectDB = require('./database.js');
var cors = require('cors')
const routes = require('./routes/router.js');
connectDB();

app.use(cors());

app.use('/api', routes)
app.listen(3005)