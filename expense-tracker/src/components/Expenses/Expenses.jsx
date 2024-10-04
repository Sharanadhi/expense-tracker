// import { useState,useEffect } from 'react';
// import axios from 'axios'

import './Expenses.scss'


function Expenses({expenses}) {
  // const baseUrl = 'http://localhost:8080/';
  // const [expenses,setExpenses] = useState([]);
  // useEffect(()=>{
  //   const getExpenses = async () => {
  //     const response = await axios.get(`${baseUrl}getExpenses`);
  //     setExpenses(response.data.expenses);
  //   }
  //   getExpenses();
  // },[]);

  return (<section className="expenses">
    <ul className="expenses__list">
    {
    expenses.map((expense) => (
      <li key={expense.id} className="expenses__item">
      <div className='expenses__details'>
      <p className="expenses__description">{expense.description}</p>
      <p className="expenses__category">{expense.category}</p>
      </div>
      <div>
      <p className="expenses__price">${expense.value}</p>
      </div>
    </li>
    ))
}
    </ul>
  </section>)
}

export default Expenses