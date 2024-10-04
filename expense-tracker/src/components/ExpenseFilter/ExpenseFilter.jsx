import axios from 'axios'
import './ExpenseFilter.scss'

function ExpenseFilter({categories,updateExpenses,updateExpense}) {
  const baseUrl = 'http://localhost:8080/';
  const filterExpenses = async (e) => {
    e.preventDefault();
    const category_name=e.target.value;
    if(category_name){
      const response = await axios.post(`${baseUrl}expenses/filterExpenses`,{category:category_name});
      updateExpenses(response.data.expenses)
      const total = response.data.expenses.reduce((acc, item) => acc + Number(item.value), 0);
      updateExpense(total);
    }else{
      const response = await axios.get(`${baseUrl}expenses/getExpenses`);
      updateExpenses(response.data.expenses);
      const total = response.data.expenses.reduce((acc, item) => acc + Number(item.value), 0);
      updateExpense(total);
    }
  }

  const clearfilter = async () => {
    const response = await axios.get(`${baseUrl}expenses/getExpenses`);
    updateExpenses(response.data.expenses);
    const total = response.data.expenses.reduce((acc, item) => acc + Number(item.value), 0);
    updateExpense(total);
    document.querySelector('.expenseFilter__form').reset();
  }

  return (
    <section className="expenseFilter">
      <form className="expenseFilter__form">
        <select name="category" id="category" className="expenseFilter__option" onChange={filterExpenses}>
          <option value=''>Select category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button className='expenseFilter__button' onClick={clearfilter}>Clear</button>
      </form>
    </section>
  )
}

export default ExpenseFilter