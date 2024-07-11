import React, { useState } from 'react';
import './InvestmentandRetirement.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function InvestmentandRetirement() {
  const [answers, setAnswers] = useState({});
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [feedback, setFeedback] = useState({});

  const handleSelect = (questionNumber, option) => {
    setAnswers({ ...answers, [questionNumber]: option });
    setQuestionsAttempted(questionsAttempted + 1);
  };

  const checkAnswers = () => {
    const correctAnswers = {
      1: 'B',
      2: 'C',
      3: 'A',
      4: 'B',
      5: 'C'
    };

    let score = 0;
    const newFeedback = {};
    for (let questionNumber in answers) {
      if (answers[questionNumber] === correctAnswers[questionNumber]) {
        score++;
        newFeedback[questionNumber] = "Your answer is correct! 🎉🎉";
      } else {
        newFeedback[questionNumber] = "Your answer is incorrect. Try again!";
      }
    }
    setFeedback(newFeedback);
    alert(`Your score: ${score}/5`);
  };

  const showCorrectAnswer = (questionNumber) => {
    const correctAnswers = {
      1: 'B',
      2: 'C',
      3: 'A',
      4: 'B',
      5: 'C'
    };
    const correctAnswer = correctAnswers[questionNumber];
    setFeedback({ ...feedback, [questionNumber]: `The correct answer is ${correctAnswer}` });
  };

  const progress = (questionsAttempted / 5) * 100;
  return (
    <div className="goals">
      <h1>Real world: The Case of the Early Bird</h1>
      <p>Saving and investing help you reach your short-term and long-term goals by putting money aside for things like emergencies, going to college, buying a house, or retiring. By planning and saving money, you make sure you have enough for what you need and want in the future. Created by Sal Khan.</p>
      <div class="embed-responsive embed-responsive-1by1">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3X5x0UJ5EyI?si=NTNqHgEpux9onjCe" allowfullscreen></iframe>
</div>
<div className="quiz-container">
      <h2>Take a quick Quiz and expertise on your money power</h2>
      <div className="progress-bar">
        Progress: {progress}%
        <div style={{ width: `${progress}%`, background: 'green', height: '20px' }}></div>
      </div>
      <ol>
        <li>
          Question 1: Which financial institutions are often used to help people get a loan?


          <br />
          <input type="radio" name="q1" value="A" onChange={() => handleSelect(1, 'A')} /> A) Brokerage Firm
          <br />
          <input type="radio" name="q1" value="B" onChange={() => handleSelect(1, 'B')} /> B) Credit Union
          <br />
          <input type="radio" name="q1" value="C" onChange={() => handleSelect(1, 'C')} /> C) Insurance Company
          <Button variant="info" onClick={() => showCorrectAnswer(1)}>Show Correct Answer</Button>
          <div>{feedback[1]}</div>
        </li>
        <li>
          Question 2: Financial markets are places where different types of things (like stocks, bonds, or commodities) are traded.

          <br />
          <input type="radio" name="q2" value="A" onChange={() => handleSelect(2, 'A')} /> A) Bond Market
          <br />
          <input type="radio" name="q2" value="B" onChange={() => handleSelect(2, 'B')} /> B) Money Market
          <br />
          <input type="radio" name="q2" value="C" onChange={() => handleSelect(2, 'C')} /> C) Stock Market
          <Button variant="info" onClick={() => showCorrectAnswer(2)}>Show Correct Answer</Button>
          <div>{feedback[2]}</div>
        </li>
        <li>
          Question 3: What do financial markets do?

          <br />
          <input type="radio" name="q3" value="A" onChange={() => handleSelect(3, 'A')} /> A) Offer loan
          <br />
          <input type="radio" name="q3" value="B" onChange={() => handleSelect(3, 'B')} /> B) Offer people a place to buy or sell stocks and bonds

          <br />
          <input type="radio" name="q3" value="C" onChange={() => handleSelect(3, 'C')} /> C) Store Money for people
          <Button variant="info" onClick={() => showCorrectAnswer(3)}>Show Correct Answer</Button>
          <div>{feedback[3]}</div>
        </li>
        <li>
          Question 4:You have a goal to save for an emergency fund. You want to find an institution that will help you save your money and grow it over time so you can reach your goal faster. Which type of financial institution can help you with this?

          <br />
          <input type="radio" name="q4" value="A" onChange={() => handleSelect(4, 'A')} /> A) Bank
          <br />
          <input type="radio" name="q4" value="B" onChange={() => handleSelect(4, 'B')} /> B) Insurance Company
          <br />
          <input type="radio" name="q4" value="C" onChange={() => handleSelect(4, 'C')} /> C) Lender
          <Button variant="info" onClick={() => showCorrectAnswer(4)}>Show Correct Answer</Button>
          <div>{feedback[4]}</div>
        </li>
        <li>
          Question 5: Which market offers shares of different companies for trade?
          <br />
          <input type="radio" name="q5" value="A" onChange={() => handleSelect(5, 'A')} /> A) Money Market
          <br />
          <input type="radio" name="q5" value="B" onChange={() => handleSelect(5, 'B')} /> B) Stock Market
          <br />
          <input type="radio" name="q5" value="C" onChange={() => handleSelect(5, 'C')} /> C) Bond Market
          <Button variant="info" onClick={() => showCorrectAnswer(5)}>Show Correct Answer</Button>
          <div>{feedback[5]}</div>
        </li>
      </ol>
      <Button variant="info" onClick={checkAnswers}>Check Answers</Button>
    </div>
    </div>
  );
}

export default InvestmentandRetirement;