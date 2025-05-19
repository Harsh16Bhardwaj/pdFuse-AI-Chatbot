import React from 'react';

interface MessageBubbleProps {
  message: string;
  isUserMessage: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isUserMessage }) => {
  return (
    <div className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`max-w-xs p-2 rounded-lg text-white ${
          isUserMessage ? 'bg-blue-500' : 'bg-gray-500'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageBubble;