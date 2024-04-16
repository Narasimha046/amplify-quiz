import React, { useState } from 'react';
import quizData from './quizData';
import './Quiz.css'; // Import the Quiz component's CSS file for styling

function Quiz() {
  const [selectedSubject, setSelectedSubject] = useState("java");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const subjectOptions = Object.keys(quizData);

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer("");
    setIsCorrect(null);
  };

  const handleAnswerOptionClick = (option) => {
    const currentQuestions = quizData[selectedSubject];
    if (!currentQuestions) return;
    const correctAnswer = currentQuestions[currentQuestion]?.answer;
    setSelectedAnswer(option);
    if (option === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < currentQuestions.length) {
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
      <div className='subject-selection'>
        <h2>Select Subject:</h2>
        {subjectOptions.map(subject => (
          <button
            key={subject}
            onClick={() => handleSubjectChange(subject)}
            className={selectedSubject === subject ? "selected" : ""}
          >
            {subject.toUpperCase()}
          </button>
        ))}
      </div>
      {showScore ? (
        <div className='score-section'>
          <h3>Quiz Completed!</h3>
          <p>You scored {score} out of {quizData[selectedSubject].length}</p>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{quizData[selectedSubject].length}
            </div>
            <div className='question-text'>{quizData[selectedSubject][currentQuestion]?.question}</div>
          </div>
          <div className='answer-section'>
            {quizData[selectedSubject][currentQuestion]?.options.map((option) => (
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
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>

            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
