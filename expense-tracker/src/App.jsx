import AddExpensePage from './pages/AddExpensePage.jsx';
import './App.scss';
import Header from './components/Header/Header'
import TotalExpense from './components/TotalExpense/TotalExpense'
import Expenses from './components/Expenses/Expenses'
import './App.scss'

function App() {
  return (
    <>
      <AddExpensePage />
      <Header />
      <TotalExpense />
      <Expenses />
    </>
  );
}

export default App;
