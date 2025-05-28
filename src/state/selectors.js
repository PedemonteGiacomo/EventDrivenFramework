// src/state/selectors.js

// Tutti gli eventi di un tipo specifico
export const selectEventsByType = (state, type) =>
  state.events.eventsByType[type] || [];

// Se vuoi ancora quelli unici
export const selectUniqueEventsByType = (state, type) => {
  const seen = new Set();
  const list = selectEventsByType(state, type);
  return list.filter(evt => {
    const key = JSON.stringify(evt);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};
