import React, { useState } from 'react';
import quizData from './quizData';
import './Quiz.css';

function Quiz({ selectedSubject, onBackClick }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const questions = quizData[selectedSubject];

  const handleAnswerOptionClick = (option) => {
    const correctAnswer = questions[currentQuestion]?.answer;
    setSelectedAnswer(option);
    if (option === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setIsCorrect(null);
        setSelectedAnswer("");
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  return (
    <div className='quiz-container'>
      {!showScore && (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion]?.question}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion]?.options.map((option) => (
              <label key={option} className="answer-option">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => setSelectedAnswer(option)}
                />
                {option}
              </label>
            ))}
          </div>
          <button
            onClick={() => handleAnswerOptionClick(selectedAnswer)}
            className="submit-button"
          >
            Submit
          </button>
          {selectedAnswer && (
            <div className={`feedback ${isCorrect === true ? "correct" : "incorrect"}`}>
            </div>
          )}
        </>
      )}
      {showScore && (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      )}
    </div>
  );
}

export default Quiz;
