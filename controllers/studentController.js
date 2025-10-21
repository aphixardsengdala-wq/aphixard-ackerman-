const studentModel = require("../models/studentModel");

const handleGreeting = (req,res) => {
    res.send("hello,lao-top API");
};

const handleGetStudents = (req,res) => {
    const studentsData = studentModel.getAllStudents();
    res.json(studentsData);
};

const studentController = {
    handleGreeting,
    handleGetStudents,
};

module.exports = studentController;