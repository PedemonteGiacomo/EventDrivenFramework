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
    // 1) all'avvio della connect action, apriamo il WS
    if (action.type === connect.type) {
      socket = io(action.payload.url)

      socket.on('connect', () => {
        storeAPI.dispatch(connectionOpened())
      })
      socket.on('disconnect', () => {
        storeAPI.dispatch(connectionClosed())
      })

      // ascolta *qualsiasi* evento in ingresso
      socket.onAny((eventType, data) => {
        storeAPI.dispatch(eventReceived({ eventType, payload: data }))
      })
    }

    // 2) quando UI fa dispatch(sendEvent), inoltriamo al bus
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
