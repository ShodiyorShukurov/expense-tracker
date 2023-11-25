import React from "react";
import PropTypes from "prop-types";
import { Provider as ExpenseTrackerProvider } from "./ExpenseTracker";
import { Provider as FormProvider } from "./Form";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <ExpenseTrackerProvider>
        <FormProvider>{children}</FormProvider>
      </ExpenseTrackerProvider>
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object,
};

export { Context, Provider };
