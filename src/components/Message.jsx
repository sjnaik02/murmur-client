import React from "react";

function Message({ message }) {
  return (
    <div className="p-4">
      <p className="text-green-300">
        {message.sender}{" "}
        <span className="text-gray-300 text-xs">{message.timestamp}</span>
      </p>
      <p className="text-white">{message.body}</p>
    </div>
  );
}

export default Message;
