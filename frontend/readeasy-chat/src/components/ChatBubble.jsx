import React from "react";

function ChatBubble({ message, sender }) {
  const isUser = sender === "user";

  return (
    <div
      className={`d-flex mb-3 ${
        isUser ? "justify-content-end" : "justify-content-start"
      }`}
    >
      <div
        className={`p-3 rounded ${
          isUser ? "bg-primary text-white" : "bg-light text-dark"
        }`}
        style={{ maxWidth: "70%", animation: "fadeIn 0.5s" }}
      >
        {message}
      </div>
    </div>
  );
}

export default ChatBubble;
