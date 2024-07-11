import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpenseTracker.css'
import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Button from 'react-bootstrap/Button';


const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState({
    shopping: 0,
    clothing: 0,
    food: 0,
    electronics: 0,
    telephone: 0,
    otherHousehold: 0
  });

  
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [text, setText] = useState({
    recipient: '',
    response: '',
  });
  const [accessToken, setAccessToken] = useState('');
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category') {
      setCategory(value);
    } else {
      setAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpenses = { ...expenses };
    newExpenses[category] += parseInt(amount);
    setExpenses(newExpenses);
    setCategory('');
    setAmount('');
  };

 

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(expenses),
        datasets: [{
          data: Object.values(expenses),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

  }, [expenses]);

  const sendText = () => {
    fetch(`http://localhost:5002/send-text?recipient=${text.recipient}&response=${text.response}`)
      .catch(err => console.log(err));
  }

  const spacer = {
    margin: 8
  };

  const textArea = {
    borderRadius: 4
  };

  return (
    <div>
      <div className='expensetracker'>
        <p> Tracking monthly expenses empowers us to take control of our finances, cultivate healthy spending habits, and progress towards financial goals.
          Regularly reviewing expense summaries helps stay accountable and adjust budget accordingly. By understanding where money is going,
          we can make informed decisions, prioritize savings, and work towards achieving financial freedom.
        </p>
        <h1>Track your expenses on a monthly basis</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Category:</label>
            <select name="category" value={category} onChange={handleInputChange}>
              <option value="">-- Select Category --</option>
              <option value="shopping">Shopping</option>
              <option value="clothing">Clothing</option>
              <option value="food">Food</option>
              <option value="electronics">Electronics</option>
              <option value="telephone">Telephone</option>
              <option value="otherHousehold">Other Household</option>
            </select>
          </div>
          <div>
            <label>Amount:</label>
            <input type="number" name="amount" value={amount} onChange={handleInputChange} />
          </div>
          <Button variant="info" type="submit">Add Expense</Button>
        </form>
        <div style={{ marginTop: '20px', width: '300px', height: '300px' }}>
          <canvas ref={chartRef}></canvas>
        </div>

        

        
      </div>
    </div>
  );
}

export default ExpenseTracker;
