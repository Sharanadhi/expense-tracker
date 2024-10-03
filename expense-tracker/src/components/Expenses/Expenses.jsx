import './Expenses.scss'
import expenses from '../../data/expenses2.json'


function Expenses({expenseId}) {
  console.log(expenseId);
  return (<section className="expenses">
    <ul className="expenses__list">


    {
    expenses.map((expense) => (
      <li key={expense.id} className="expenses__item">
      <div className='expenses__details'>
      <p className="expenses__description">{expense.decription}</p>
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