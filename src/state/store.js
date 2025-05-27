import { configureStore } from '@reduxjs/toolkit';
import {
  connect,
  connectionOpened,
  connectionClosed,
  eventReceived,
  sendEvent
} from './eventsSlice';
import eventsReducer from './eventsSlice';
import { io } from 'socket.io-client';

const socketIOMiddleware = () => {
  let socket;
  return storeAPI => next => action => {
    if (action.type === connect.type) {
      socket = io(action.payload.url);
      socket.on('connect', () => {
        storeAPI.dispatch(connectionOpened());
      });
      socket.on('disconnect', () => {
        storeAPI.dispatch(connectionClosed());
      });
      socket.on('OrderCreated', data => {
        storeAPI.dispatch(eventReceived(data));
      });
    }

    if (action.type === sendEvent.type && socket) {
      const { eventType, payload } = action.payload;
      socket.emit(eventType, payload);
    }

    return next(action);
  };
};

const store = configureStore({
  reducer: {
    events: eventsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(socketIOMiddleware())
});

export default store;
