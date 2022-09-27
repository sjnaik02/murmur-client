import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center">
      <h1 className="text-xl text-white">Hello world</h1>
    </div>
  );
}

export default App;
