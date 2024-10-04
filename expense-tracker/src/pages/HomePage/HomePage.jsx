import { useState,useEffect } from 'react';
import axios from 'axios'

import TotalExpense from "../../components/TotalExpense/TotalExpense"
import Expenses from "../../components/Expenses/Expenses"
import ExpenseFilter from '../../components/ExpenseFilter/ExpenseFilter';

function HomePage() {
  const baseUrl = 'http://localhost:8080/';
  const [expenses,setExpenses] = useState([]);
  const [categories, setCategory] = useState([]);
  const [totalExpense,setExpense] = useState(0);

  useEffect(()=>{
    const getExpenses = async () => {
      const response = await axios.get(`${baseUrl}expenses/getExpenses`);
      setExpenses(response.data.expenses);
      const expense=response.data.expenses;
      const total = expense.reduce((acc, item) => acc + Number(item.value), 0);
      setExpense(total);
    }

    const getCategories = async () => {
      const response = await axios.get(`${baseUrl}category/getCategories`);
      setCategory(response.data.categories);    
    }

    getExpenses();
    getCategories();
  },[]);

  return (
    <>
     <ExpenseFilter categories={categories} updateExpenses={setExpenses} updateExpense={setExpense}/>  
     <TotalExpense expense={totalExpense}/>   
     <Expenses expenses={expenses} updateExpenses={setExpenses} updateExpense={setExpense}/>
    </>
  )
}

export default HomePage