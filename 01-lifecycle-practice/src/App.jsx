import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("렌더링 발생!");
  });

  return (
    <div>
      <h1>LifeCycle Practice</h1>
      <button onClick={() => setCount(count + 1)}>
        클릭 횟수: {count}
      </button>
    </div>
  );
}

export default App;

