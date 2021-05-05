var express = require('express');
const mongoose = require('mongoose');
const config=require('./config/config')
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useFindAndModify: false, useCreateIndex: true
}, (err, data) => {
    if (err) {
        console.log('error in database connection');

    } else {
        console.log('Database connected successFully');
     

    }
})
app.listen(4003, (err, data) => {
    if (err) {
        console.log(" error in listening ", err);

    } else {
        console.log('server connected successfully');
        console.log('listening on port 4003');
    }
})

