// src/store.js
import { configureStore } from '@reduxjs/toolkit';

// Stato iniziale
const initialState = {
  lastOrder: null,
};

// Il tuo reducer “tradizionale”
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ORDER_CREATED':
      return { ...state, lastOrder: action.payload };
    default:
      return state;
  }
}

// Configuri lo store con RTK: DevTools abilitati di default in modalità development
export const store = configureStore({
  reducer: rootReducer,
});
