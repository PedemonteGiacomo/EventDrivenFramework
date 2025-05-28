// src/state/eventsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  eventsByType: {},  // es: { ChatMessage: [...], OrderSubmitted: [...] }
  connected: false
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    connect: (state, action) => {
      state.connected = false;
    },
    connectionOpened: state => {
      state.connected = true;
    },
    connectionClosed: state => {
      state.connected = false;
    },

    // Evento ricevuto dal middleware socket (eventType, payload)
    eventReceived: (state, action) => {
      const { eventType, payload } = action.payload || {};
      if (!eventType) return;

      if (!state.eventsByType[eventType]) {
        state.eventsByType[eventType] = [];
      }

      state.eventsByType[eventType].push(payload);
    },

    // Azione dispatchata dall'interfaccia per mandare eventi
    sendEvent: {
      reducer: (state, action) => {
        // opzionale: optimistic update (push in arrivo qui)
        // const { eventType, payload } = action.payload;
        // if (!state.eventsByType[eventType]) {
        //   state.eventsByType[eventType] = [];
        // }
        // state.eventsByType[eventType].push(payload);
      },
      prepare: (eventType, payload) => ({
        payload: { eventType, payload }
      })
    },

    // Pulizia eventi per tipo (utile per debug/reset o history limit)
    clearEventsByType: (state, action) => {
      const eventType = action.payload;
      if (eventType && state.eventsByType[eventType]) {
        state.eventsByType[eventType] = [];
      }
    }
  }
});

export const {
  connect,
  connectionOpened,
  connectionClosed,
  eventReceived,
  sendEvent,
  clearEventsByType
} = eventsSlice.actions;

export default eventsSlice.reducer;
