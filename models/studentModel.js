const dataStudents = [
    { name: "sith", age:29, class: "Web"},
    { name: "maly", age:22, class: "App"},
    { name: "phet", age:19, class: "Biz"},
    { name: "dao", age:21, class: "Eng"},
];

const studentModel = {
    getAllStudents: () => dataStudents,
    };

    module.exports = studentModel;