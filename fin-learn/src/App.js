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
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Landing from "./Pages/Landing";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const App = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedin);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<BudgetingandSavings />} />
        <Route path='/goals' element={<FinancialGoals />} />
        <Route path='/investments' element={<InvestmentandRetirement />} />
        <Route path='/careers' element={<CareerandEducation />} />
        <Route path='/trackers' element={<ExpenseTracker />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/overview" element={!isLoggedIn ? <Navigate to="/sign-in" /> : <Landing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
