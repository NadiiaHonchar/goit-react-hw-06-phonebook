import { combineReducers } from "redux";
import { configureStore} from "@reduxjs/toolkit";
// import { addContact, delContact, changeFilter } from "./actions";
import {contactsReducer} from './reducers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage: storage,
  blacklist: "filter",
};

// const itemReducer = createReducer([], {
//   [addContact]: (state, { payload }) => {
//     if (state.filter((item) => item.name === payload.name).length > 0) {
//       alert(`${payload.name} is already in contacts`);
//       return;
//     }
//     return [...state, payload];
//   },
//   [delContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filterReducer = createReducer("", {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const contactsReducer = combineReducers({
//   items: itemReducer,
//   filter: filterReducer,
// });

const rootReducer = combineReducers({ contacts: contactsReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
export default store;
