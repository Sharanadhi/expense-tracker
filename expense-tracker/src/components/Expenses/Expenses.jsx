import './Expenses.scss'
import expenses from '../../data/expenses.json'


function Expenses({expenseId}) {
console.log(expenseId);
const expense = expenses.find((expense)=> {
  expense.id == expenseId
  });
console.log(expense);

  return (<section className="expenses">
    <ul className="expenses__list">
    {expenses.map((expense) => {
      <li className="expenses__item">
      <div className='expenses__details'>
      <p className="expenses__description"></p>
      <p className="expenses__category">{expense.category}</p>
      </div>
      <div>
      <p className="expenses__price">$10.00</p>
      </div>
    </li>
    })
}
     
     
    </ul>
  </section>)
}

export default Expenses