// src/components/SchemaRenderer.js
import React, { Suspense } from 'react'
import { getRenderer }       from './AutoRegistry'
import BaseLayout            from './base/BaseLayout'

export default function SchemaRenderer({ schema }) {
  const Renderer = getRenderer(schema.type)
  if (!Renderer) {
    return (
      <div style={{ color: 'red', padding: '1rem', border: '1px solid red' }}>
        Tipo non supportato: <strong>{schema.type}</strong>
      </div>
    )
  }

  // il contenuto “nudo” del viewer
  const content = (
    <Suspense fallback={<div>Loading…</div>}>
      <Renderer {...schema} />
    </Suspense>
  )

  // se schema.layoutHeader è non‐vuoto, avvolgo tutto in BaseLayout
  if (schema.layoutHeader && schema.layoutHeader.trim() !== "") {
    return (
      <BaseLayout header={schema.layoutHeader}>
        {content}
      </BaseLayout>
    )
  }

  // altrimenti ritorno solo il viewer
  return content
}
