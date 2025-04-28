import React, { useState } from "react";
import UploadButton from "./components/UploadButton";
import SummarizeButton from "./components/SummarizeButton";
import QnAInput from "./components/QnAInput";
import ChatWindow from "./components/ChatWindow";
import { uploadFile, summarizeDoc, askQuestion } from "./api";

function App() {
  const [chats, setChats] = useState([]);

  const handleUpload = async (file) => {
    const response = await uploadFile(file);
    alert(response.message);
  };

  const handleSummarize = async () => {
    const response = await summarizeDoc();
    setChats((prev) => [...prev, { message: response.summary, sender: "bot" }]);
  };

  const handleAsk = async (question) => {
    setChats((prev) => [...prev, { message: question, sender: "user" }]);
    const response = await askQuestion(question);
    setChats((prev) => [...prev, { message: response.answer, sender: "bot" }]);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">ReadEasy Chat</h1>

      <ChatWindow chats={chats} />

      <QnAInput onAsk={handleAsk} />
      <SummarizeButton onSummarize={handleSummarize} />
      <UploadButton onUpload={handleUpload} />
    </div>
  );
}

export default App;
