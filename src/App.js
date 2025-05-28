// src/App.js
import React, { useEffect } from 'react'
import { useDispatch }         from 'react-redux'
import { connect }             from './state/eventsSlice'
import SchemaRenderer          from './components/SchemaRenderer'
import schemaDef               from './schemas/ChatViewer.schema.json'

import Ajv from 'ajv'
const ajv = new Ajv({ useDefaults: true })
const validate = ajv.compile(schemaDef)

// config minimale, magari solo il type
const rawConfig = { type: "ChatViewer", layoutHeader: "Event Driven Architecture example" }
validate(rawConfig)
const fullConfig = rawConfig

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(connect({ url: 'http://localhost:4000' })) }, [dispatch])

  return <SchemaRenderer schema={fullConfig}/>
}
