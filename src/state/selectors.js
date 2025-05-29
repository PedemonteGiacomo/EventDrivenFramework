// src/state/selectors.js

// Prende tutti gli eventi di un tipo
export const selectEventsByType = (state, type) =>
  state.events.eventsByType[type] || [];

// Deduplica **solo** le ripetizioni **consecutive**
export const selectUniqueEventsByType = (state, type) => {
  const list = selectEventsByType(state, type);
  return list.filter((evt, idx) => {
    if (idx === 0) return true;
    const prev = list[idx - 1];
    // confronta payload grezzo
    return JSON.stringify(evt) !== JSON.stringify(prev);
  });
};
