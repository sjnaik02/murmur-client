import { useParams, useLocation } from "react-router-dom";
import useChat from "../hooks/useChat";
import { useState } from "react";

function ChatRoom() {
  const { roomid } = useParams();
  const { messages, sendMessage } = useChat(roomid);
  const [newMessage, setNewMessage] = useState("");
  //get username passed through state
  const { state } = useLocation();
  const username = state.user;

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
        <div className="w-screen lg:w-96 mx-4  h-[80vh] bg-gray-900 rounded-lg overflow-y-scroll">
          {messages.map((message) => (
            <div className="p-4">
              <p className="text-green-300">
                {message.sender}{" "}
                <span className="text-gray-300 text-xs">
                  {message.timestamp}
                </span>
              </p>
              <p className="text-white">{message.body}</p>
            </div>
          ))}
        </div>
        <div className="w-screen lg:w-96 h-12 flex">
          <input
            type="text"
            placeholder="Message"
            className="w-full p-4  h-full rounded-lg border-2 border-gray-900"
            value={newMessage}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-blue-500 text-white p-2 w-auto h-full rounded-lg"
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
