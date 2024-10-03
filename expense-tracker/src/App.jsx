import { BrowserRouter,Routes,Route } from "react-router-dom";

import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage.jsx'
import AddExpensePage from './pages/AddExpensePage/AddExpensePage.jsx';
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage.jsx";
import './App.scss'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/expense/:expenseId" element={< ExpensesPage/>} />
      <Route path="/addexpense" element={<AddExpensePage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
