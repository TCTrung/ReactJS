import { useState } from "react";

function App() {
  const [count,setCount] = useState(1);

  return (
      <div className="App">
        <h1>{count}</h1>
      </div>

  );
}

export default App;
