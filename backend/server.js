const express = require('express')
const app = express()
const connectDB = require('./database.js');
var cors = require('cors')
const routes = require('./routes/router.js');
connectDB();
const PORT = process.env.PORT || 3005;


app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "true");
    res.send("Api is running")
})
app.use('/api', routes)
app.listen(PORT)