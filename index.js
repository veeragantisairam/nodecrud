const express = require('express');
const app = express();
var student = require('./routes/student')
var bodyparser = require('body-parser');
const portnum = 3000;
//middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/student', student)
app.get('/', (req, res) => {
    res.send('welcome')
});

app.listen(portnum, () => {
    console.log(`server listening port number: ${portnum}`);
})