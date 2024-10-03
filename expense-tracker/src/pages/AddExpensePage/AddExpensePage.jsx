import './AddExpensePage.scss';
import expenses from '../../data/expenses2.json';
import categories from '../../data/categories.json';

import { useState } from 'react';

export default function AddExpensePage() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleChangeDescription = (event) => {
    setDescription(event.target.value.trimStart());
  };

  const handleChangeValue = (event) => {
    setValue(event.target.value.trimStart());
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    expenses.push({
      id: `${expenses.length + 1}`,
      category: category,
      decription: description,
      value: value,
    });
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
            value={category}
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
              value={description}
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
              value={value}
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
