import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, delContact, changeFilter } from "./actions";

export const itemReducer = createReducer([], {
    [addContact]: (state, { payload }) => {
      if (state.filter((item) => item.name === payload.name).length > 0) {
        alert(`${payload.name} is already in contacts`);
        return;
      }
      return [...state, payload];
    },
    [delContact]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  });

 export const filterReducer = createReducer("", {
    [changeFilter]: (_, { payload }) => payload,
  });
  
 export const contactsReducer = combineReducers({
    items: itemReducer,
    filter: filterReducer,
  });
  