const express = require('express')
const app = express()
const connectDB = require('./database.js');
var cors = require('cors')
const routes = require('./routes/router.js');
connectDB();
const PORT = process.env.PORT || 3005;
const corsOptions = {
    origin: 'http://counter-frontend-cgu0.onrender.com',
    optionsSuccessStatus: 200, // Some legacy browsers choke on a 204 response.
  };
app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.send("hello");
})
app.use('/api', routes)
app.listen(PORT)