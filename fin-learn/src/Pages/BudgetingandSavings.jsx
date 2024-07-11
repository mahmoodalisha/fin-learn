import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BudgetingandSavings.css'
import img1 from '../assets/img1.png'
import budget from '../assets/budget.png'
import debt from '../assets/debt.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



const BudgetingandSavings = () => {
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
        newFeedback[questionNumber] = "Your answer is correct!  🎉 🎉";
      } else {
        newFeedback[questionNumber] = "Your answer is incorrect. Try again!";
      }
    }
    setFeedback(newFeedback);
    
    alert(`Your score: ${score}/5`)
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
    
    <div className='intro'>
      
        <img src={img1} alt="" />
        
        <p> &#160; &#160; &#160; <br />Financial literacy refers to the capacity to understand and apply 
            financial concepts such as Budgeting, investing, credit management, and financial management etc.<br/> &#160;&#160;&#160;&#160;In other terms,it is the capacity to handle money. These abilities will help one achieve a variety of life objectives, 
            including retirement, education, and even taking a trip.</p>
            
              
            <div class="embed-responsive embed-responsive-1by1">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tEha8BzsAZ8?si=ohQsNPUurrplEu9E" allowfullscreen></iframe>
</div>
<div className="left">
    <h1> <br />What is Financial Literacy?</h1>
    <p> <br />Financial literacy is the cognitive understanding of financial components and skills such as budgeting, investing, borrowing, taxation, and personal financial management. <br />
    The absence of such skills is referred to as being financially illiterate. <br />
    According to the Financial Industry Regulatory Authority (FINRA), about 66% of the American population is considered financially illiterate.

Being financially literate allows an individual to be better prepared for specific financial roadblocks, which, in turn, decreases the chances of personal economic distress.

Achieving financial literacy is crucial in today’s society due to everyday facets of life, such as student loans, mortgages, credit cards, investments, and health insurance. <br /></p>
<h1> <br />Why is Financial Literacy so important?</h1>
<p> <br />From day-to-day expenses to long-term budget forecasting, financial literacy is crucial for managing these factors. It is important to plan and save enough to provide adequate income in retirement while avoiding high levels of debt that might result in bankruptcy, defaults, and foreclosures.




Though these may seem like individual problems, they have a wider effect on the entire population than previously believed. All one needs is to look at the financial crisis of 2008 to see the financial impact on the entire economy that arose from a lack of understanding of mortgage products (creating a vulnerability to predatory lending). Financial literacy is an issue with broad implications for economic health.
</p>


</div>
<div class="embed-responsive embed-responsive-1by1">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/LKxOamnP8J4?si=Vgvd1Iljvwy64CHC" allowfullscreen></iframe>
</div>

<div className="quiz-container">
      <h2>Take a quick Quiz and expertise on your money power</h2>
      <div className="progress-bar">
        Progress: {progress}%
        <div style={{ width: `${progress}%`, background: 'green', height: '20px' }}></div>
      </div>
      <ol>
        <li>
          Question 1: According to the 50/30/20 rule, what percentage of your income should you allocate to needs?

          <br />
          <input type="radio" name="q1" value="A" onChange={() => handleSelect(1, 'A')} /> A) 20%
          <br />
          <input type="radio" name="q1" value="B" onChange={() => handleSelect(1, 'B')} /> B) 50%
          <br />
          <input type="radio" name="q1" value="C" onChange={() => handleSelect(1, 'C')} /> C) 30%
          <Button variant="info" onClick={() => showCorrectAnswer(1)}>Show Correct Answer</Button>
          <div>{feedback[1]}</div>
        </li>
        <li>
          Question 2: What should of your income go towards, if you are following the 50/30/20 rule?

          <br />
          <input type="radio" name="q2" value="A" onChange={() => handleSelect(2, 'A')} /> A) Wants
          <br />
          <input type="radio" name="q2" value="B" onChange={() => handleSelect(2, 'B')} /> B) Needs
          <br />
          <input type="radio" name="q2" value="C" onChange={() => handleSelect(2, 'C')} /> C) Savings
          <Button variant="info" onClick={() => showCorrectAnswer(2)}>Show Correct Answer</Button>
          <div>{feedback[2]}</div>
        </li>
        <li>
          Question 3: You have a monthly income of $4000. You plan to follow the 50/30/20 rule for budgeting.
          <br />
          <input type="radio" name="q3" value="A" onChange={() => handleSelect(3, 'A')} /> A) $1200
          <br />
          <input type="radio" name="q3" value="B" onChange={() => handleSelect(3, 'B')} /> B) $800
          <br />
          <input type="radio" name="q3" value="C" onChange={() => handleSelect(3, 'C')} /> C) $2000
          <Button variant="info" onClick={() => showCorrectAnswer(3)}>Show Correct Answer</Button>
          <div>{feedback[3]}</div>
        </li>
        <li>
          Question 4:You are currently getting paid bi-weekly. You want to start paying yourself first and have opened a savings account. You want your savings transfers to happen every time you get paid.
          <br />
          <input type="radio" name="q4" value="A" onChange={() => handleSelect(4, 'A')} /> A) Once Every Week
          <br />
          <input type="radio" name="q4" value="B" onChange={() => handleSelect(4, 'B')} /> B) Weekly
          <br />
          <input type="radio" name="q4" value="C" onChange={() => handleSelect(4, 'C')} /> C) Once a month
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
  
  
<div className="strategies"><h1>Strategies to Improve Financial Literacy Skills</h1></div>
<div className="images">
  
  <h1>Create a Budget</h1>
  <p>Track how much money you receive each month against how much you spend</p>
  <p>on an Excel sheet, on paper, or with a budgeting app. Your budget should include income (paychecks, investments,, alimony),</p>
  <p>fixed expenses (rent/mortgage payments, utilities, loan payments),discretionary spending (nonessentials such as eating out, shopping, and travel) and savings.</p>
  <img src={budget} alt="" />
  <img src={debt} alt="" />
  </div>
  <div className="create">How Do I Become Financially Literate?</div>
  <div className="create2">Being financially literate means having the knowledge and confidence to effectively manage, save and invest money for you and your family. This can include everything from getting out of debt, sticking to a budget, buying insurance, exploring investments and creating college or retirement savings plans.</div>
  
  

  
  </div>

  
    
        
   
  )
}

export default BudgetingandSavings
 
