import React from "react";
import { createContext, useContext, useReducer } from "react";

export const AppContext = createContext();

const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
};

export default DataLayer;

export const useDataLayerValue = () => useContext(AppContext);
