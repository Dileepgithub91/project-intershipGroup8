const express = require("express");

const route = require("./routes/route");

const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://dileepkm:L3cuCdGwQQWTF3Hs@cluster0.iqkms8u.mongodb.net/intern", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))



app.use('/', route)


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});