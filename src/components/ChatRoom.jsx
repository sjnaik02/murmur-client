import { useParams } from "react-router-dom";
import useChat from "../hooks/useChat";
import { useState } from "react";

function ChatRoom() {
  const { roomid } = useParams();
  const { messages, sendMessage } = useChat(roomid);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  //implement enter to send
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage(newMessage);
      setNewMessage("");
    }
  };
  return (
    <div>
      <h1 className="text-3xl text-white">Murmur</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="w-80 h-96 bg-gray-900 rounded-lg overflow-y-scroll">
          {messages.map((message) => (
            <div className="p-4">
              <p className="text-white">{message.body}</p>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Message"
          className="w-80 p-4  h-10 rounded-lg border-2 border-gray-900"
          value={newMessage}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={() => {
            sendMessage(newMessage);
            setNewMessage("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;
