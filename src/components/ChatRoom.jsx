import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import useChat from "../hooks/useChat";
import Message from "./Message";

function ChatRoom() {
  const { roomid } = useParams();
  const { messages, sendMessage } = useChat(roomid);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const { state } = useLocation();
  const username = state.user;

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSend = () => {
    sendMessage(newMessage, username);
    setNewMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <div className="w-screen h-screen">
      <h1 className="text-3xl text-black text-center">Murmur</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="w-5/6 lg:w-96 mx-4  h-[80vh] bg-gray-900 overflow-y-scroll">
          {messages.map((message) => (
            <Message
              message={message}
              key={`${message.senderId}${message.timestamp}`}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="w-5/6 lg:w-96 h-12 flex">
          <input
            type="text"
            placeholder="Message"
            className="w-full p-4  h-full border-2 border-gray-900"
            value={newMessage}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-blue-500 text-white p-2 w-auto h-full rounded-sm"
            onClick={() => {
              handleSend();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
