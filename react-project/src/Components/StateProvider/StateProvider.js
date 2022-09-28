import React, { createContext, useContext, useReducer } from "react";

//First prepare the dataLayer using createContext() hook
export const StateContext = createContext();

// Wrap my App and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Push and pull information from the data Layer
export const useStateValue = () => useContext(StateContext);
