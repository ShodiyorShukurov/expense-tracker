import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const [expenses, setExpenses] = React.useState([
    { id: 1, name: "Milk", amount: 5, category: "Groceries" },
    { id: 2, name: "Phone", amount: 1500, category: "Utilities" },
    { id: 3, name: "Restaurant", amount: 250, category: "Entertainment" },
  ]);

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <Context.Provider value={{ expenses, setExpenses, handleDelete }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
