import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className="space-y-14">
      <h1 className="text-9xl text-center text-violet-400">{count}</h1>
      <button
        className="px-12 py-7 bg-slate-400 text-3xl rounded-2xl mx-auto"
        onClick={handleCount}
      >
        Clik Me
      </button>
    </div>
  );
};

export default App;
