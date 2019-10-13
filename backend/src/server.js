const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose')
const app = express();

app.use(express.json());
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-erh2y.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(routes);

app.listen(3333);


