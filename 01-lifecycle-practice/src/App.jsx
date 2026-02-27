import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("렌더링 발생!");
  }, [count]);

  return(
    <div>
      <h1> 👉 증가, 감소 버튼 👈 </h1>
      <button onClick={() => setCount(prev => prev + 1)}
        disabled={count >= 10}
      >
        증가버튼
      </button>
      <button onClick={() => setCount(prev => prev - 1)}>
        감소버튼
      </button>
      <button onClick={() => setCount(0)}>
        reset
      </button>
      {count >= 0 ? <p>😊</p> : <p>⚠️ 음수입니다</p>}
      {count >= 5 && <p>5 이상입니다</p>}
      <p>현재 값 : {count}</p>
    </div>
  );
}

export default App;