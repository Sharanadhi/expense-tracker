import axios from 'axios'
import './ExpenseFilter.scss'

function ExpenseFilter({categories,updateExpenses,updateExpense}) {
  const baseUrl = 'http://localhost:8080/';
  const filterExpenses = async (e) => {
    e.preventDefault();
    const category_name=e.target.value;
    if(category_name){
      const response = await axios.post(`${baseUrl}filterExpenses`,{category:category_name});
      updateExpenses(response.data.expenses)
      const total = response.data.expenses.reduce((acc, item) => acc + Number(item.value), 0);
      updateExpense(total);
    }else{
      const response = await axios.get(`${baseUrl}getExpenses`);
      updateExpenses(response.data.expenses);
      const total = response.data.expenses.reduce((acc, item) => acc + Number(item.value), 0);
      updateExpense(total);
    }
   
  }

  return (
    <section className="expenseFilter">
      <select name="category" className="expenseFilter__option" onChange={filterExpenses}>
        <option value=''>Select category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </section>
  )
}

export default ExpenseFilter