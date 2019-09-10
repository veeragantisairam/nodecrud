const express = require('express');
const app = express();
var student = require('./routes/student')
var bodyparser = require('body-parser');

//middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/student', student)
app.get('/', (req, res) => {
    res.send('welcome')
});

app.listen(3000, () => {
    console.log(`server listening port number 3000`);
})