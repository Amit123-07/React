import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-screen h-screen flex flex-col justify-end items-center transition-colors duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="bottom-12 w-fit inset-x-0 flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mb-5">
        <button
          onClick={() => setColor("violet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "violet" }}
        >Violet</button>
        <button
          onClick={() => setColor("indigo")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "indigo" }}
        >Indigo</button>
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >Blue</button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >Green</button>
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "yellow" }}
        >Yellow</button>
        <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "orange" }}
        >Orange</button>
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "red" }}
        >Red</button>
        
      </div>
    </div>
  );
}

export default App;
