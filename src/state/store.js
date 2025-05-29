// src/state/store.js
import { configureStore } from '@reduxjs/toolkit'
import eventsReducer, {
  connect,
  connectionOpened,
  connectionClosed,
  eventReceived,
  sendEvent
} from './eventsSlice'
import { io } from 'socket.io-client'

const socketIOMiddleware = () => {
  let socket = null

  return storeAPI => next => action => {
    // --- 1) APRI IL SOCKET SOLO SE NON ESISTE GIÀ ---
    if (action.type === connect.type) {
      // se esiste già, non ristabiliamo un secondo socket
      if (socket) {
        return next(action)
      }

      socket = io(action.payload.url)

      socket.on('connect', () => {
        storeAPI.dispatch(connectionOpened())
      })
      socket.on('disconnect', () => {
        storeAPI.dispatch(connectionClosed())
      })

      socket.onAny((eventType, data) => {
        storeAPI.dispatch(eventReceived({ eventType, payload: data }))
      })
    }

    // 2) inoltra sendEvent SOLO SULLO STESSO socket
    if (action.type === sendEvent.type && socket && socket.connected) {
      const { eventType, payload } = action.payload
      socket.emit(eventType, payload)
    }

    return next(action)
  }
}

export default configureStore({
  reducer: {
    events: eventsReducer
  },
  middleware: getDefault => getDefault().concat(socketIOMiddleware())
})
