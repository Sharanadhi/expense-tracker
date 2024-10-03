import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <section className="header__brand">
        <Link to={'/'}>
          <h2 className="header__logo">Expense Tracker</h2>
        </Link>
      </section>
      <section className="header__links">
        <Link to={'/addcategory'} className="header__link">
          Category
        </Link>
        <Link to={'/addexpense'} className="header__link">
          Expense
        </Link>
      </section>
    </header>
  );
}

export default Header;
