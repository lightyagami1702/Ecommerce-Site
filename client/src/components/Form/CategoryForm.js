import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 p-1 cato-form">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
