const Quiz = require('../model/quiz');

module.exports.addQuiz = async (req, res) => {
    try { 
        console.log(req.body);
        const { title, description, questions } = req.body;
        const quiz = new Quiz({ title, description, questions });

        req.body.createdAt = new Date().toLocaleDateString();
        const savedQuiz = await quiz.save();
        res.status(201).json(savedQuiz);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports.getAllQuizes = async (req, res) => {
    try {
        const quizzes = await Quiz.find(); 
        res.status(200).json({ quizzes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching quizzes' });
    }
};

module.exports.getQuizById = async (req, res) => {
    const quizId = req.params.id;

    try {
        const quiz = await Quiz.findById(quizId); 
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json({ quiz });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching quiz' });
    }
};
module.exports.submitQuiz = async (req, res) => {
    const quizId = req.params.id;
    const userAnswers = req.body.answers; 

    try {
        const quiz = await Quiz.findById(quizId); 
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        let score = 0;
        quiz.questions.forEach((question, index) => {
            if (question.correctAnswer === userAnswers[index]) {
                score += 1;
            }
        });

        res.status(200).json({ message: 'Quiz submitted successfully', score, total: quiz.questions.length });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error submitting quiz' });
    }
};