const express = require('express');
const app = express();
const port = 5000;
const config = require('./config/key');

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB 연결완료'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`${port}에 연결됨`))