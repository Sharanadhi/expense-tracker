import './AddCategory.scss';
import categories from '../../data/categories.json';
import { useState } from 'react';
export default function AddCategory() {
  const [category, setCategory] = useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value.trimStart());
  };

  const handleSubmit = (event) => {
    const form = event.target;
    event.preventDefault();

    categories.push({ id: `${categories.length + 1}`, name: `${category}` });
    console.log(categories);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setCategory('');
  };

  return (
    <section className="add-category">
      <h1 className="add-category__page-title">ADD CATEGORY</h1>
      <form className="add-category__form" onSubmit={handleSubmit}>
        <div className="add-category__wrapper">
          <label htmlFor="categoryInput" className="add-category__label">
            Category
          </label>
          <textarea
            id="categoryInput"
            className="add-category__input"
            name="categoryInput"
            placeholder="Add a category"
            onChange={handleChangeCategory}
            value={category}
          ></textarea>
        </div>
        <div className="add-category__buttons-wrapper">
          <button className="add-category__button" type="submit">
            ADD category
          </button>
          <button
            className="add-category__cancel-button"
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
