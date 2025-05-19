import React, { useEffect, useState } from 'react';
import { useSessionContext } from '../hooks/useSessionContext';
import { MessageBubble } from './MessageBubble';
import { Loader } from './Loader';

const ChatWindow = () => {
  const { session } = useSessionContext();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      // Fetch messages from the server or local storage
      // This is a placeholder for the actual fetch logic
      const fetchedMessages = await fetch('/api/chat/message').then(res => res.json());
      setMessages(fetchedMessages);
      setLoading(false);
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    // Send the new message to the server
    await fetch('/api/chat/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newMessage, sessionId: session.id }),
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