const express = require('express');
const app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var student = require('./routes/student')

const portnum = 3001;



app.use('/student', student)
app.get('/', (req, res) => {
    res.send('welcome');
});

app.listen(portnum, () => {
    console.log(`server listening port number: ${portnum}`);
})