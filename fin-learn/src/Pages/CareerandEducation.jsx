import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const CareerandEducation = () => {
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
    let incorrectQuestions = [];
    for (let questionNumber in answers) {
      if (answers[questionNumber] === correctAnswers[questionNumber]) {
        score++;
      } else {
        incorrectQuestions.push(questionNumber);
      }
    }

    const percentage = (score / 5) * 100;
    let feedbackMessage = `You got ${score} out of 5 questions correct (${percentage}%).\n`;

    if (incorrectQuestions.length > 0) {
      feedbackMessage += 'Questions you got wrong:\n';
      incorrectQuestions.forEach((questionNumber) => {
        feedbackMessage += `Question ${questionNumber}\n`;
      });
    } else {
      feedbackMessage += 'You got all questions correct. Well done!';
    }
    const newFeedback = {};
    for (let questionNumber in answers) {
      if (answers[questionNumber] === correctAnswers[questionNumber]) {
        score++;
        newFeedback[questionNumber] = "  Your answer is correct! 🎉🎉";
      } else {
        newFeedback[questionNumber] = "  Your answer is incorrect. Try again!";
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
    setFeedback({ ...feedback,  [questionNumber]: `The correct answer is ${correctAnswer}` });
  };

  const progress = (questionsAttempted / 5) * 100;

  return (
    <div className="goals">
      <h1> &#160; &#160; &#160; &#160;  &#160;  &#160;Education as an investment</h1>
      <p>Education investment is when people and their families put time, money, and hard work into going to college or learning more after high school. This investment can lead to better job opportunities and a brighter future for the person. Created by Sal Khan.</p>
      <div class="embed-responsive embed-responsive-1by1">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/SAjZj3ZwebA?si=4Wg3PhTU4kcNaPKS" allowfullscreen></iframe>
</div>
<div className="quiz-container">
      <h2>Take a quick Quiz and expertise on your money power</h2>
      <div className="progress-bar">
        Progress: {progress}%
        <div style={{ width: `${progress}%`, background: 'green', height: '20px' }}></div>
      </div>
      <ol>
        <li>
          Question 1: Which of the following best describes the term academic reputation?


          <br />
          <input type="radio" name="q1" value="A" onChange={() => handleSelect(1, 'A')} /> A) Percent of Students who finish their program on time

          <br />
          <input type="radio" name="q1" value="B" onChange={() => handleSelect(1, 'B')} /> B) How well Known or respected a school is

          <br />
          <input type="radio" name="q1" value="C" onChange={() => handleSelect(1, 'C')} /> C) How challenging the classes are
          <Button variant="info" onClick={() => showCorrectAnswer(1)}>Show Correct Answer</Button>
          <div>{feedback[1]}</div>
        </li>
        <li>
          Question 2: There are many school choices out there. When looking at a for-profit school, it is important to look a little more carefully than if you were looking at a public school. What should you watch out for when considering a for-profit school?


          <br />
          <input type="radio" name="q2" value="A" onChange={() => handleSelect(2, 'A')} /> A) The school might not offer Elective classes
          <br />
          <input type="radio" name="q2" value="B" onChange={() => handleSelect(2, 'B')} /> B) The school might have too many students in one classroom

          <br />
          <input type="radio" name="q2" value="C" onChange={() => handleSelect(2, 'C')} /> C) They might not provide good quality education
          <Button variant="info" onClick={() => showCorrectAnswer(2)}>Show Correct Answer</Button>
          <div>{feedback[2]}</div>
        </li>
        <li>
          Question 3: When choosing a school to attend, some factors can help you determine the quality of education offered there. Which factors help determine if a school is a good educational investment?

          <br />
          <input type="radio" name="q3" value="A" onChange={() => handleSelect(3, 'A')} /> A) academic reputation

          <br />
          <input type="radio" name="q3" value="B" onChange={() => handleSelect(3, 'B')} /> B) accreditation
          <br />
          <input type="radio" name="q3" value="C" onChange={() => handleSelect(3, 'C')} /> C) school's ranking
          <Button variant="info" onClick={() => showCorrectAnswer(3)}>Show Correct Answer</Button>
          <div>{feedback[3]}</div>
        </li>
        <li>
          Question 4:Which of the following methods typically involves paying for a purchase over time?
          <br />
          <input type="radio" name="q4" value="A" onChange={() => handleSelect(4, 'A')} /> A) credit card
          <br />
          <input type="radio" name="q4" value="B" onChange={() => handleSelect(4, 'B')} /> B) debit card
          <br />
          <input type="radio" name="q4" value="C" onChange={() => handleSelect(4, 'C')} /> C) cash
          <Button variant="info" onClick={() => showCorrectAnswer(4)}>Show Correct Answer</Button>
          <div>{feedback[4]}</div>
        </li>
        <li>
          Question 5: When it comes to paying for an item, there are many payment methods available. One payment method involves borrowing money from a lender in order to make a purchase, with the intention of paying the lender back over time, usually with interest. Which term describes this payment method?

          <br />
          <input type="radio" name="q5" value="A" onChange={() => handleSelect(5, 'A')} /> A) layaway
          <br />
          <input type="radio" name="q5" value="B" onChange={() => handleSelect(5, 'B')} /> B) credit card
          <br />
          <input type="radio" name="q5" value="C" onChange={() => handleSelect(5, 'C')} /> C) cash
          <Button variant="info" onClick={() => showCorrectAnswer(5)}>Show Correct Answer</Button>
          <div>{feedback[5]}</div>
        </li>
      </ol>
      <Button variant="info" onClick={checkAnswers}>Check Answers</Button>
    </div>
    </div>
  );
}

export default CareerandEducation;


