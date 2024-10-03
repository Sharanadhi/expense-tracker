import './AddExpensePage.scss';
import axios from 'axios';
import categories from '../../data/categories.json';

import { useState } from 'react';

export default function AddExpensePage() {
  const baseUrl = 'http://localhost:8080/';
  const [expense_description, setDescription] = useState('');
  const [expense_value, setValue] = useState('');
  const [category_name, setCategory] = useState('');

  const handleChangeDescription = (event) => {
    setDescription(event.target.value.trimStart());
  };

  const handleChangeValue = (event) => {
    setValue(event.target.value.trimStart());
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(`${baseUrl}addExpense`, {
      category_name,
      expense_description,
      expense_value,
    });
    event.target.reset();
    alert(response.data.message);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setValue('');
    setDescription('');
  };

  return (
    <section className="add-expense">
      <h1 className="add-expense__page-title">ADD EXPENSE</h1>
      <form className="add-expense__form" onSubmit={handleSubmit}>
        <div className="add-expense-wrapper">
          <label htmlFor="category" className="add-expense__category-label">
            Expense Category:
          </label>
          <select
            name="category"
            id="category"
            className="add-expense__category"
            onChange={handleChangeCategory}
            value={category_name}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
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
              onChange={handleChangeDescription}
              value={expense_description}
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
              onChange={handleChangeValue}
              value={expense_value}
            ></textarea>
          </div>
        </div>
        <div className="add-expense__buttons-wrapper">
          <button className="add-expense__publish-button" type="submit">
            ADD EXPENSE
          </button>
          <button
            className="add-expense__cancel-button"
            type="button"
            onClick={handleCancel}
          >
            CANCEL
          </button>
        </div>
      </form>
    </section>
  );
}
