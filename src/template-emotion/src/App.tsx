import { useEffect, useState } from "react";
import img from "./assets/img.png";
import { add } from "lodash-es";
import { css } from "@emotion/react";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      app
      <img src={img} width={300} alt="img" />
      <div
        css={css`
          color: red;
        `}
      >
        {add(1, 2)}
      </div>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}

export default App;
