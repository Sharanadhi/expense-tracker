import './Expenses.scss'

function Expenses() {
  return (<section className="expenses">
    <ul className="expenses__list">
      <li className="expenses__item">
        <div className='expenses__details'>
        <p className="expenses__name">Item 1</p>
        <p className="expenses__category">Grocery</p>
        </div>
        <div>
        <p className="expenses__price">$10.00</p>
        </div>
      </li>

      <li className="expenses__item">
        <div className='expenses__details'>
        <p className="expenses__name">Item 2</p>
        <p className="expenses__category">Clothing</p>
        </div>
        <div>
        <p className="expenses__price">$75.00</p>
        </div>
      </li>

      <li className="expenses__item">
        <div className='expenses__details'>
        <p className="expenses__name">Item 3</p>
        <p className="expenses__category">Transport</p>
        </div>
        <div>
        <p className="expenses__price">$28.00</p>
        </div>
      </li>

      <li className="expenses__item">
        <div className='expenses__details'>
        <p className="expenses__name">Item 4</p>
        <p className="expenses__category">Food</p>
        </div>
        <div>
        <p className="expenses__price">$14.00</p>
        </div>
      </li>
     
    </ul>
  </section>)
}

export default Expenses