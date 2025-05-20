import React, { useEffect, useState } from 'react';
import MessageBubble from './MessageBubble';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store/index';

const ChatWindow = () => {
  // Get session from Redux store
  const session = useSelector((state: RootState) => state.session.session);

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const fetchedMessages = await fetch('/api/chat/message').then(res => res.json());
      setMessages(fetchedMessages);
      setLoading(false);
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    await fetch('/api/chat/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newMessage, sessionId: session?.id }),
    });

    setMessages([...messages, { content: newMessage, sender: 'user' }]);
    setNewMessage('');
  };

  return (
    <div className="chat-window">
      {loading ? (
        <Loader />
      ) : (
        <div className="messages">
          {messages.map((msg, index) => (
            <MessageBubble key={index} message={msg} />
          ))}
        </div>
      )}
      <div className="input-area">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="message-input"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;