var express = require('express');
var router = express.Router();
var student = require('./studentmodel');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/studentcollection', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connect('mongodb://localhost/studentcollection', {
    useNewUrlParser: false,
    useUnifiedTopology: true
}, (err) => {
    if (err) throw err;
    console.log('Successfully connected');

});

//creating data
router.post('/', (req, res) => {
    console.log(req.body)
    var std = new student(req.body);
    std.save((err, result) => {
        res.status(200).json(result);
    })
});

// getting all records
router.get('/', (req, res) => {
    student.find().exec((err, result) => {
        res.status(200).json(result);
    });
});


// getting particular record
router.get('/:id', (req, res) => {
    student.findById(req.params.id).exec((err, result) => {
        res.status(200).json(result);
    });
})



// updating data
router.put('/:id', (req, res) => {
    console.log(req.params);
    student.findByIdAndUpdate(req.params.id, req.body).exec((err, result) => {
        student.findById(req.params.id).exec((err, result) => {
            res.status(200).json(result);
        });
    });

});

// delete record by id
router.delete('/:id', (req, res) => {
    student.findByIdAndDelete(req.params.id).exec((err, result) => {
        student.find().exec((err, result) => {
            res.status(200).json(result);
        })
    })

});

module.exports = router;