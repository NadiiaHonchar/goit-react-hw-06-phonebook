import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addContact = createAction("contact/addContact", (data) => {
  return {
    payload: {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    },
  };
});

export const delContact = createAction("contact/delContact");
export const changeFilter = createAction("contact/changeFilter");
