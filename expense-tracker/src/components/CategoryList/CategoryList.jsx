import {Link} from 'react-router-dom'
import expenses from '../../data/expenses.json'

function CategoryList(){
  console.log(expenses);
  return (
  <section>
    <ul>
      {expenses.map((expense) => (<li key={expense.id}>
        <Link to={`/expense/${expense.id}`}>{expense.category}</Link>
      </li>))}

    </ul>
  </section>)
}

export default CategoryList