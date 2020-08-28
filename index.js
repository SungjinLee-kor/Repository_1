const express = require('express');
const app = express();
const port = 5000;
const config = require('./config/key');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(console.log("mongooDB conected"))
    .catch(err => console.log(err));

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const {User} = require("./models/user");

app.get('/', (req,res) => res.send("Hello World!!!"));

app.listen(port, () => console.log(`app listening on port ${port}`));

app.post('/register',(req, res) => {
    
    const user = new User(req.body);
    
    user.save((err, userInfo) => {
        if(err) return res.json({sucess: false, err})
        else return res.status(200).json({sucess: true})
    });
})