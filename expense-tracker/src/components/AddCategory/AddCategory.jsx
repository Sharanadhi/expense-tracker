import './AddCategory.scss';
export default function AddCategory() {
  return (
    <section className="add-category">
      <h1 className="add-category__page-title">ADD CATEGORY</h1>
      <form className="add-category__form">
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
