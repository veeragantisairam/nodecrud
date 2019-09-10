var express = require('express');
var router = express.Router();
var student = require('./studentmodel');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentcollection');


router.get('/', (req, res) => {
    student.find().exec((err, result) => {
        res.status(200).json(result);
    });
});

router.get('/:id', (req, res) => {
    student.findById(req.params.id).exec((err, result) => {
        res.status(200).json(result);
    });
})

//creating data
router.post('/', (req, res) => {
    var std = new student(req.body);
    std.save((err, result) => {
        res.status(201).json(result);
    })
});


router.put('/', (req, res) => {
    student.findByIdAndUpdate(req.params.id).exec((err, result) => {
        student.findById(req.params.id).exec((err, result) => {
            res.status(200).json(result);
        });
    });

});


router.delete('/', (req, res) => {
    student.findByIdAndDelete(req.params.id).exec((err, result) => {
        student.find().exec((err, result) => {
            res.status(200).json(result);
        })
    })

});

module.exports = router;