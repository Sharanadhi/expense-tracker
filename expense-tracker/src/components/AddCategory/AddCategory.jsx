import axios from 'axios'
import './AddCategory.scss';

export default function AddCategory() {
  const baseUrl='http://localhost:8080/';
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const category_name= e.target.categoryInput.value;
    const response = await axios.post(`${baseUrl}addCategory`,{category_name});
    e.target.reset();
    alert(response.data.message);
  }

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
          ></textarea>
        </div>
        <div className="add-category__buttons-wrapper">
          <button className="add-category__button" type="submit">
            ADD category
          </button>
          <button className="add-category__cancel-button" type="button">
            CANCEL
          </button>
        </div>
      </form>
    </section>
  );
}
