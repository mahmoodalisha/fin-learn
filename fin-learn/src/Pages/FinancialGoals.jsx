import React, { useState } from 'react';
import './FinancialGoals.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const FinancialGoals = () => {
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
    <div className="budget">
      <h1>How to write SMART financial goals</h1>
      <p>Have you ever dreamed of saving enough money to buy a car, travel, or retire comfortably?
         These are examples of financial goals. Financial goals can help you plan your budget,
          track your progress, and stay motivated. <br /> <br /> But not all financial goals are created equal. Some goals are vague, unrealistic, or hard to measure, which can make them difficult to reach. For example, saying "I want to save more money" is not a very helpful goal, because it does not explain how much money,
           why you want to save, or when you need the money to be saved by.</p>
           <div class="embed-responsive embed-responsive-1by1">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/wkpFiOh88qQ?si=pmokDW51lsB1Vhi2" allowfullscreen></iframe>
</div>
          
<div className="quiz-container">
      <h2>Take a quick Quiz and expertise on your money power</h2>
      <div className="progress-bar">
        Progress: {progress}%
        <div style={{ width: `${progress}%`, background: 'green', height: '20px' }}></div>
      </div>
      <ol>
        <li>
          Question 1: Kara is a spender type. She loves to buy new things and enjoy life, but sometimes she overspends and struggles to save.
What is a good strategy for Kara to manage her money better?

          <br />
          <input type="radio" name="q1" value="A" onChange={() => handleSelect(1, 'A')} /> A) She should buy whatever she wants
          <br />
          <input type="radio" name="q1" value="B" onChange={() => handleSelect(1, 'B')} /> B) She should set realistic budget and track her spending habits
          <br />
          <input type="radio" name="q1" value="C" onChange={() => handleSelect(1, 'C')} /> C) Avoid shopping altogether and save money
          <Button variant="info" onClick={() => showCorrectAnswer(1)}>Show Correct Answer</Button>
          <div>{feedback[1]}</div>
        </li>
        <li>
          Question 2: There are four general money personalities: spender, saver, balancer, and investor.
What is the main characteristic of an investor?

          <br />
          <input type="radio" name="q2" value="A" onChange={() => handleSelect(2, 'A')} /> A) They are always looking for way to cut costs
          <br />
          <input type="radio" name="q2" value="B" onChange={() => handleSelect(2, 'B')} /> B) They love using their money
          <br />
          <input type="radio" name="q2" value="C" onChange={() => handleSelect(2, 'C')} /> C) They are interested in making their money grow
          <Button variant="info" onClick={() => showCorrectAnswer(2)}>Show Correct Answer</Button>
          <div>{feedback[2]}</div>
        </li>
        <li>
          Question 3: Maya loves to learn about different ways to make money. She uses some of her money to buy stocks, bonds, and other assets that can increase in value over time. She is also thinking about starting her own business to sell products and services.
          <br />
          <input type="radio" name="q3" value="A" onChange={() => handleSelect(3, 'A')} /> A) Investor
          <br />
          <input type="radio" name="q3" value="B" onChange={() => handleSelect(3, 'B')} /> B) Spender
          <br />
          <input type="radio" name="q3" value="C" onChange={() => handleSelect(3, 'C')} /> C) Saver
          <Button variant="info" onClick={() => showCorrectAnswer(3)}>Show Correct Answer</Button>
          <div>{feedback[3]}</div>
        </li>
        <li>
          Question 4:Each money personality—whether it be saver, spender, investor, or balancer—comes with its own set of pros and cons.
For someone who tends to be a saver, what is one potential drawback they may need to watch out for?
          <br />
          <input type="radio" name="q4" value="A" onChange={() => handleSelect(4, 'A')} /> A) They often spend impulsively
          <br />
          <input type="radio" name="q4" value="B" onChange={() => handleSelect(4, 'B')} /> B) They might miss out on their oppurtunities to make their money grow
          <br />
          <input type="radio" name="q4" value="C" onChange={() => handleSelect(4, 'C')} /> C) They are at a risk of losing money
          <Button variant="info" onClick={() => showCorrectAnswer(4)}>Show Correct Answer</Button>
          <div>{feedback[4]}</div>
        </li>
        <li>
          Question 5: The 50/30/20 rule describes how much a person should be budgeting for their needs, wants, and savings.
Which of the following expenses is a want according to the 50/30/20 rule?
          <br />
          <input type="radio" name="q5" value="A" onChange={() => handleSelect(5, 'A')} /> A) Car Insurance
          <br />
          <input type="radio" name="q5" value="B" onChange={() => handleSelect(5, 'B')} /> B) Dining Out
          <br />
          <input type="radio" name="q5" value="C" onChange={() => handleSelect(5, 'C')} /> C) Savings
          <Button variant="info" onClick={() => showCorrectAnswer(5)}>Show Correct Answer</Button>
          <div>{feedback[5]}</div>
        </li>
      </ol>
      <Button variant="info" onClick={checkAnswers}>Check Answers</Button>
    </div>
    </div>
  );

}

export default FinancialGoals;

