// src/components/AutoRegistry.js
// Usa Webpack require.context (oppure Vite import.meta.glob se sei su Vite)
const req = require.context('./custom', false, /\.jsx?$/)

export const registry = req.keys().reduce((map, file) => {
  const mod = req(file)
  // Ogni modulo custom deve esportare `export const schemaType = 'Foo'`
  if (mod.schemaType && mod.default) {
    map[mod.schemaType] = mod.default
  }
  return map
}, {})

// helper
export function getRenderer(type) {
  return registry[type] || null
}
