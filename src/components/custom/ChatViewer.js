// src/components/custom/ChatViewer.js
import React from 'react'
import BaseCard   from '../base/BaseCard'
import BaseForm   from '../base/BaseForm'
import ChatDisplay from './ChatDisplay'
import { useEventBus } from '../../useEventBus'
import { useSelector } from 'react-redux'
import { selectUniqueChatEvents, selectChatEvents } from '../../state/selectors'

// Il nome che useremo nello schema: schema.type === 'ChatViewer'
export const schemaType = 'ChatViewer'

export default function ChatViewer({
  header,
  inputPlaceholder,
  buttonText,
  sendEventType,
  displayEventType,
  layoutClass,        // puoi definire proprietà addizionali nello schema
}) {
  const { sendEvent } = useEventBus()

  // 1) Scegli quale selector usare in base a displayEventType
  const events = useSelector(state => {
    switch (displayEventType) {
      case 'ChatMessage':      return selectUniqueChatEvents(state)
      case 'ChatMessageSent':  return selectChatEvents(state)
      // puoi estendere con altri tipi...
      default:                 return []
    }
  })

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
          <BaseForm
            placeholder={inputPlaceholder}
            buttonText={buttonText}
            onSubmit={text => sendEvent(sendEventType, { sender: 'user', text })}
          />
        </div>
      </div>
    </BaseCard>
  )
}
