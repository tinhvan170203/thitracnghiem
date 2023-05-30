const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
var cookies = require("cookie-parser");

app.use(cookies());


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(express.json());
const port = process.env.port || 4000;


const authRoute = require('./routes/auth');
const monthiRoute = require('./routes/monthi');
const donviRoute = require('./routes/donvi');
// const bachamRoute = require('./routes/bacham');
const chucvuRoute = require('./routes/chucvu');
const canboRoute = require('./routes/canbo');
const commonRoute = require('./routes/common');
const cauhoiRoute = require('./routes/cauhoi');

app.use('/', commonRoute);
app.use('/api/auth', authRoute);
app.use('/api/mon-thi', monthiRoute);
app.use('/api/cau-hoi', cauhoiRoute);
app.use('/api', donviRoute);
// app.use('/quan-ham', bachamRoute);
app.use('/chuc-vu', chucvuRoute);
app.use('/quan-tri/can-bo', canboRoute);
const path = require("path");
const basePath = '';

// //cấu hình chạy reactjs trên node server
app.use(basePath + "/", express.static(path.resolve(__dirname + "/dist")));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname + "/dist/index.html"));
});
app.listen(port, () => {
    console.log('server running ', port)
});


mongoose.connect(process.env.URL_MONGODB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(err){
        console.log(err)
    }
    console.log('kết nối db thành công')
})
