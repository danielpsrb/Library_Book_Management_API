const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());

app.use(cors());

app.get('/api/test', (req, res) => {
    res.send('Hello World');
})

const bookController = require('./controller/BookController')
app.use('/api/v1/books', bookController)

const reviewController = require('./controller/ReviewController')
app.use('/api/v1/reviews', reviewController)

//folder file static express
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(
        `Server is running and listening on url http://localhost:${PORT}`
    );
})