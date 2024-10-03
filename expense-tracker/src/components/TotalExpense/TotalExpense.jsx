import { useState,useEffect } from 'react';
import axios from 'axios'


import './TotalExpense.scss'

function TotalExpense(){
  const [totalExpense,setExpense] = useState(0);

  useEffect(()=>{
    const getExpenses = async () => {
      const baseUrl = 'http://localhost:8080/';
      const response = await axios.get(`${baseUrl}getExpenses`);
      console.log(response.data.expenses);
      const expenses=response.data.expenses;
      const total = expenses.reduce((acc, item) => acc + Number(item.value), 0);
      setExpense(total);
    }
    getExpenses();
  },[]);

  return (<section className='totalExpense'>
    <div className='totalExpense__card'>
      <p className='totalExpense__text'>Total</p>
      <h1 className='totalExpense__amount'>$ {totalExpense}</h1>
    </div>
  </section>)
}

export default TotalExpense