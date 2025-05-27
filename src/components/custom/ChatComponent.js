import { useDispatch, useSelector } from 'react-redux';
import { sendEvent } from '../../state/eventsSlice';
import BaseCard from '../base/BaseCard';
import BaseForm from '../base/BaseForm';
import ChatDisplay from './ChatDisplay';

function ChatComponent() {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.list);

  const handleSendMessage = (text) => {
    dispatch(sendEvent('ChatMessageSent', { text }));
  };

  return (
    <BaseCard title="Chatbot">
      <ChatDisplay events={events} />
      <BaseForm onSubmit={handleSendMessage} placeholder="Scrivi un messaggio..." />
    </BaseCard>
  );
}
export default ChatComponent;
