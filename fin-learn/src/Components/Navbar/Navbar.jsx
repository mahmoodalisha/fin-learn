import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("hop");

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <p>Fin Learn - The fun way to Learn your finances</p>
        <li onClick={() => setMenu("hop")}>
          <Link to='/'> Budgeting and Savings </Link>
          {menu === "hop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("goals")}>
          <Link to='/goals'>Financial Goals</Link>
          {menu === "goals" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("investments")}>
          <Link to='/investments'>Investment and Retirement</Link>
          {menu === "investments" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("careers")}>
          <Link to='/careers'>Career and Education</Link>
          {menu === "careers" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("trackers")}>
          <Link to='/trackers'>Expense Tracker</Link>
          {menu === "trackers" ? <hr /> : null}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
