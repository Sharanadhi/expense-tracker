import './AddExpensePage.scss';
import categories from '../../data/categories.json'

export default function AddExpensePage() {
  return (
    <section className="add-expense">
      <h1 className="add-expense__page-title">ADD EXPENSE</h1>
      <form className="add-expense__form">
        <div className="add-expense-wrapper">
          <label htmlFor="category" className="add-expense__category-label">
            Expense Category:
          </label>
          <select
            name="category"
            id="category"
            className="add-expense__category"
          >
            {categories.map((category) => (<option key={category.id} value={category.name}>{category.name}</option>))}
          </select>
        </div>
        <div className="add-expense__inputs-wrapper">
          <div className="add-expense__description-wrapper">
            <label
              htmlFor="descriptionInput"
              className="add-expense__description-label"
            >
              Expense Description
            </label>
            <textarea
              id="descriptionInput"
              className="add-expense__description-input"
              name="descriptionInput"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
          <div className="add-expense__value-wrapper">
            <label htmlFor="valueInput" className="add-expense__value-label">
              Value ($)
            </label>
            <textarea
              id="valueInput"
              className="add-expense__value-input"
              name="valueInput"
              placeholder="Add a value to your video"
            ></textarea>
          </div>
        </div>
        <div className="add-expense__buttons-wrapper">
          <button className="add-expense__publish-button" type="submit">
            ADD EXPENSE
          </button>
          <button className="add-expense__cancel-button" type="button">
            CANCEL
          </button>
        </div>
      </form>
    </section>
  );
}
