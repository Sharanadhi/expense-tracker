import { useParams } from "react-router-dom"
import Expenses from "../../components/Expenses/Expenses"

function ExpensesPage(){
  const expenseId = useParams();
  return(
    <>
    <Expenses expenseId={expenseId}/>
    </>
  )
}

export default ExpensesPage