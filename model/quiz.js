const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: [true, 'Please add a question text'],
    },
    answerChoices: [
        {
            type: String,
            required: [true, 'Please add an answer choice'],
        }
    ],
    correctAnswer: {
        type: String,
        required: [true, 'Please add the correct answer'],
    }
});


const quizSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    questions: [questionSchema],
    createdAt: {
        type:String
    }
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;