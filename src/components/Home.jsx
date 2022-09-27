import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    if (roomName && userName) {
      navigate(`/${roomName}`);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-white">Murmur</h1>
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Room Name"
          className="w-80 p-4  h-10 rounded-lg border-2 border-gray-900"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          className="w-80 p-4  h-10 rounded-lg border-2 border-gray-900"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={handleClick}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}

export default Home;
