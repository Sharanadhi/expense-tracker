import './AddExpensePage.scss';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function AddExpensePage() {
  const baseUrl = 'http://localhost:8080/';
  const [categories, setCategory] = useState([]);
  const [expense_description, setDescription] = useState('');
  const [expense_value, setValue] = useState('');
  useEffect(()=>{
    const getCategories = async () => {
      const response = await axios.get(`${baseUrl}category/getCategories`);
      setCategory(response.data.categories);
    }
    getCategories();
  },[]);

  const handleChangeDescription = (event) => {
    setDescription(event.target.value.trimStart());
  };
  
  const handleChangeValue = (event) => {
    setValue(event.target.value.trimStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target);
    const category_name = event.target.category.value;
    const expense_description = event.target.descriptionInput.value;
    const expense_value = event.target.valueInput.value;
    try {
      const response = await axios.post(`${baseUrl}expenses/addExpense`, {
        category_name,
        expense_description,
        expense_value,
      });
      event.target.reset();
      setValue('');
      setDescription('');
      alert(response.data.message);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("Failed to submit the form. Please try again.");
    }
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
          >
            <option value="">Select category</option>
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
              placeholder="Add expense description"
              onChange={handleChangeDescription}
              value={expense_description}
            ></textarea>
          </div>
          <div className="add-expense__value-wrapper">
            <label htmlFor="valueInput" className="add-expense__value-label">
              Expense ($)
            </label>
            <textarea
              id="valueInput"
              className="add-expense__value-input"
              name="valueInput"
              placeholder="Add expense"
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
