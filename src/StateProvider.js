//setup data layer
//we need this to track te basket
import React, { createContext, useContext, useReducer } from "react";

//This is the Data Layer
export const StateContext = createContext();

//Build A Provider

export const StateProvider = ({ reducer, initialState, children , store }) => (
  <StateContext.Provider
    className="Provider"
    value={useReducer(reducer, initialState)}
  >
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
