// ChatApp.js
import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import './Chat.css'

const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const chatMembers = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ];

  return (
    <div className="chat-app">
      <ChatList
        chatMembers={chatMembers}
        selectedUser={selectedUser}
        onUserSelect={(user) => setSelectedUser(user)}
      />
      <ChatWindow selectedUser={selectedUser} />
    </div>
  );
};

export default ChatApp;
