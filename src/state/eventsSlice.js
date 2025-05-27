import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
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
    eventReceived: (state, action) => {
      state.list.push(action.payload);
    },
    sendEvent: {
      reducer: (state, action) => {},
      prepare: (eventType, payload) => ({
        payload: { eventType, payload }
      })
    }
  }
});

export const {
  connect,
  connectionOpened,
  connectionClosed,
  eventReceived,
  sendEvent
} = eventsSlice.actions;

export default eventsSlice.reducer;