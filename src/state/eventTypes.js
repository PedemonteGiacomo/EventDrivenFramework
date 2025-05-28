// src/state/eventTypes.js

/**
 * Catalogo di tutti i tipi di evento usati nel framework.
 * Usali ovunque tu faccia dispatch/sendEvent o li ascolti.
 */
export const EVENT_TYPES = {
  CHAT_MESSAGE:        "ChatMessage",
  CHAT_MESSAGE_SENT:   "ChatMessageSent",
  ORDER_SUBMITTED:     "OrderSubmitted",
  ORDER_CREATED:       "OrderCreated",
  // aggiungi qui altri eventType man mano...
};
