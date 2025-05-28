// src/components/custom/ChatViewer.js
import React from 'react'
import BaseCard from '../base/BaseCard'
import BaseFormWithEvent from '../base/BaseFormWithEvent'
import ChatDisplay from './ChatDisplay'
import { useSelector } from 'react-redux'
import {
  selectEventsByType,
  selectUniqueEventsByType
} from '../../state/selectors'

// schema.type === 'ChatViewer'
export const schemaType = 'ChatViewer'

export default function ChatViewer({
  header,
  inputPlaceholder,
  buttonText,
  sendEventType,
  displayEventType,
  layoutClass,
  deduplicate = true // default: deduplica
}) {
  // Se deduplicate è true, usa il selector che rimuove duplicati
  const events = useSelector(state =>
    deduplicate
      ? selectUniqueEventsByType(state, displayEventType)
      : selectEventsByType(state, displayEventType)
  )

  return (
    <BaseCard noPadding className={layoutClass || 'max-w-md mx-auto shadow-xl'}>
      <div className="bg-blue-600 text-white p-4 font-semibold text-lg">
        {header}
      </div>
      <div className="flex flex-col h-[500px] bg-gray-100">
        <div className="flex-1 overflow-auto">
          <ChatDisplay events={events} />
        </div>
        <div className="p-3 border-t border-gray-200">
          <BaseFormWithEvent
            placeholder={inputPlaceholder}
            buttonText={buttonText}
            eventType={sendEventType}
            buildPayload={(text) => ({ sender: 'user', text })}
          />
        </div>
      </div>
    </BaseCard>
  )
}
