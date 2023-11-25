import React from "react";
import { Context as ExpenseTrackerContext } from "../../context/ExpenseTracker";
import { Context as FormContext } from "../../context/Form";

const ExpenseTracker = () => {
  const { handleDelete } = React.useContext(ExpenseTrackerContext);
  const { visibledExpenses } = React.useContext(FormContext);
  return (
    <>
      <div className="container">
        {visibledExpenses.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {visibledExpenses.length > 0 &&
                visibledExpenses.map((expense) => (
                  <tr key={expense.id}>
                    <td>{expense.name}</td>
                    <td>${Number(expense.amount).toFixed(2)}</td>
                    <td>{expense.category}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDelete(expense.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total:</td>
                <td>
                  $
                  {visibledExpenses
                    .reduce(
                      (total, expense) => total + Number(expense.amount),
                      0
                    )
                    .toFixed(2)}
                </td>
                <td></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        ) : null}
      </div>
    </>
  );
};

export default ExpenseTracker;
