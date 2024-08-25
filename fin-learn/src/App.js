import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import BudgetingandSavings from './Pages/BudgetingandSavings';
import FinancialGoals from './Pages/FinancialGoals';
import InvestmentandRetirement from './Pages/InvestmentandRetirement';
import CareerandEducation from './Pages/CareerandEducation';
import ExpenseTracker from './Pages/ExpenseTracker';
import Footer from './Components/Footer/Footer';


const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<BudgetingandSavings />} />
        <Route path='/goals' element={<FinancialGoals />} />
        <Route path='/investments' element={<InvestmentandRetirement />} />
        <Route path='/careers' element={<CareerandEducation />} />
        <Route path='/trackers' element={<ExpenseTracker />} />
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
