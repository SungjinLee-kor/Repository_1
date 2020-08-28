const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aa5657:aa753951@cluster0.kvqva.mongodb.net/Cluster?retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(console.log("mongooDB conected"))
    .catch(err => console.log(err));

app.get('/', (req,res) => res.send("Hello World!!!"));

app.listen(port, () => console.log(`app listening on port ${port}`));
