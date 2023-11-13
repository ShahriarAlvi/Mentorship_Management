// ChatList.js
import React from 'react';

const ChatList = ({ chatMembers, selectedUser, onUserSelect }) => {
  return (
    <div className="chat-list">
      <h2>Chat Members</h2>
      <ul>
        {chatMembers.map((user) => (
          <li
            key={user.id}
            className={selectedUser && selectedUser.id === user.id ? 'active' : ''}
            onClick={() => onUserSelect(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
