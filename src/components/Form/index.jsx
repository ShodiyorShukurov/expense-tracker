import React from "react";
import { Context as FormContext } from "../../context/Form";

const Form = () => {
  const { handleSubmit, descRef, amountRef, categoryRef, setSelect } =
    React.useContext(FormContext);

  return (
    <>
      <div className="container">
        <h1 className="text-center my-3">Expense Tracker</h1>
        <form
          className="form mb-5 needs-validation"
          onSubmit={(evt) => handleSubmit(evt)}
          noValidate
        >
          <div className="mb-3  has-validation position-relative">
            <label className="form-label" htmlFor="desc">
              Description
            </label>

            <input
              className="form-control"
              type="text"
              id="desc"
              ref={descRef}
              required
            />
            <div className="invalid-tooltip">
              Description should be at least 3 characters.
            </div>

            {/*<span className="text-danger">* Required</span>*/}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="amount">
              Amount
            </label>
            <input
              className="form-control"
              type="number"
              id="amount"
              name="amount"
              ref={amountRef}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="category">
              Category
            </label>
            <select className="form-select" id="category" ref={categoryRef}>
              <option></option>
              <option value="Groceries">Groceries</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>

        <select
          className="form-select mb-5"
          onChange={(evt) => setSelect(evt.target.value)}
        >
          <option value="">All Category</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
    </>
  );
};

export default Form;
