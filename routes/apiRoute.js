const express = require('express');
const studentController = require('../controllers/studentController');
const courseController = require("../controllers/courseController");
const collaborationController = require("../controllers/collaborationController");
const apiRouter = express.Router();

apiRouter.get('/', studentController.handleGreeting);
apiRouter.get('/students', studentController.handleGetStudents);
apiRouter.get("/courses", courseController.handleGetCourses);
apiRouter.get("/collaborations", collaborationController.handleGetCollaborations);

module.exports = apiRouter;