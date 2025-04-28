import React from "react";
import ChatBubble from "./ChatBubble";

function ChatWindow({ chats }) {
  return (
    <div
      className="border rounded p-3 mb-3"
      style={{ height: "400px", overflowY: "auto", backgroundColor: "#f8f9fa" }}
    >
      {chats.map((chat, index) => (
        <ChatBubble key={index} message={chat.message} sender={chat.sender} />
      ))}
    </div>
  );
}

export default ChatWindow;
