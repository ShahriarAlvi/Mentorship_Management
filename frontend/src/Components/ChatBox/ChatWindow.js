// ChatWindow.js
import React from 'react';

const ChatWindow = ({ selectedUser }) => {
  return (
    <div className="chat-window">
      <h2>{selectedUser ? `Chat with ${selectedUser.name}` : 'Select a user to chat'}</h2>
    </div>
  );
};

export default ChatWindow;
