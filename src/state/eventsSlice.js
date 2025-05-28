// src/state/eventsSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],       // ogni item: { eventType: string, payload: any }
  connected: false
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    connect: (state, action) => {
      state.connected = false
    },
    connectionOpened: state => {
      state.connected = true
    },
    connectionClosed: state => {
      state.connected = false
    },
    // viene chiamato da middleware su ogni evento in entrata
    eventReceived: (state, action) => {
      const payload = action.payload || {}
      const { eventType, payload: data } = payload
      if (typeof eventType === 'string') {
        state.list.push({ eventType, payload: data })
      }
    },
    // azione usata dal UI per inviare eventi generici
    sendEvent: {
      reducer: (state, action) => {
        // **opzionale**: se vuoi una "ottimistic push" lato UI,
        // potresti scommentare la riga successiva:
        // state.list.push({ eventType: action.payload.eventType, payload: action.payload.payload })
      },
      prepare: (eventType, payload) => ({
        payload: { eventType, payload }
      })
    }
  }
})

export const {
  connect,
  connectionOpened,
  connectionClosed,
  eventReceived,
  sendEvent
} = eventsSlice.actions

export default eventsSlice.reducer
