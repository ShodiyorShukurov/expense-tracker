import React from "react";
import PropTypes from "prop-types";
import { Context as ExpenseTrackerContext } from "../ExpenseTracker";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const { expenses, setExpenses } = React.useContext(ExpenseTrackerContext);
  const descRef = React.useRef(null);
  const amountRef = React.useRef(null);
  const categoryRef = React.useRef(null);
  const [select, setSelect] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newExpense = {
      id: expenses.length + 1,
      name: descRef.current.value.trim(),
      amount: amountRef.current.value.trim(),
      category: categoryRef.current.value.trim(),
    };
    setExpenses([...expenses, newExpense]);

    descRef.current.value = null;
    amountRef.current.value = null;
    categoryRef.current.value = null;
  };

  const visibledExpenses = select
    ? expenses.filter((expense) => expense.category === select)
    : expenses;
  return (
    <Context.Provider
      value={{ handleSubmit, descRef, amountRef, categoryRef, setSelect, visibledExpenses }}
    >
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
