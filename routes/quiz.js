const express = require("express");

const routes = express.Router();

const quizcontroller = require('../controller/quizcontroller')


routes.post("/addQuiz",quizcontroller.addQuiz);

routes.get('/getAllQuizes',quizcontroller.getAllQuizes);

routes.get('/getQuizById/:id',quizcontroller.getQuizById);


routes.post('/submitQuiz/:id',quizcontroller.submitQuiz);



module.exports = routes;