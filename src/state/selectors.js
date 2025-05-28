// src/state/selectors.js

/**
 * Ritorna TUTTI gli event objects in store
 */
export const selectAllEvents = state => state.events.list

/**
 * Filtra solo quelli di tipo ChatMessage
 */
export const selectChatEvents = state =>
  selectAllEvents(state).filter(evt => evt.eventType === 'ChatMessage')

/**
 * Deduplica in base al payload JSON.stringify(payload)
 */
export const selectUniqueChatEvents = state => {
  const seen = new Set()
  return selectChatEvents(state).filter(evt => {
    const key = JSON.stringify(evt.payload)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
