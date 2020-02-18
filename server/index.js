const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json())

const posts = require('./routes/api/posts')

app.use('/api/posts', posts)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Słucham na porcie ${port}`)
})