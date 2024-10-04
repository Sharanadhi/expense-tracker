import './TotalExpense.scss'

function TotalExpense({expense}){
  return (
    <section className='totalExpense'>
      <div className='totalExpense__card'>
        <p className='totalExpense__text'>Total</p>
        <h1 className='totalExpense__amount'>$ {expense}</h1>
      </div>
    </section>
  )}

export default TotalExpense