import './Header.scss'

function Header() {
  return(
    <header className="header">
      <section className="header__brand">
        <h2 className="header__logo">Expense Tracker</h2>
      </section>
      <section className='header__links'>
        <a href="#" className='header__link'>Add Category</a>
        <a href="#"  className='header__link'>Add Expense</a>
      </section>
    </header>
  )
}

export default Header;