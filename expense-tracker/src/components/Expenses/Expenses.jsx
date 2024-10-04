import axios from 'axios'
import './Expenses.scss'

function Expenses({expenses,updateExpenses,updateExpense}) {
  const baseUrl = 'http://localhost:8080/';
  const clearExpense = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${baseUrl}expenses/clearExpenses`,{});
    alert(response.data.message);
    updateExpenses([]);
    updateExpense(0);
  }

  return (
    <section className="expenses">
      <button className='expenses__button' onClick={clearExpense}>Clear expenses</button>
      <ul className="expenses__list">
        {
          expenses.map((expense) => (
            <li key={expense.id} className="expenses__item">
              <div className='expenses__details'>
                <p className="expenses__description">{expense.description}</p>
                <p className="expenses__category">{expense.category}</p>
              </div>
              <div>
                <p className="expenses__price" onClick={clearExpense}>${expense.value}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )}

export default Expenses