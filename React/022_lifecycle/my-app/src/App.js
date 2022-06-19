import React, { useEffect, useLayoutEffect, useState } from "react";

import ReactDOM from "react-dom/client";

function App() {
  const [num, setNum] = useState(0);

  const handleonClick = () => {
    setNum(num + 1);
  };

  useLayoutEffect(() => {
    console.log("⏱1.useLayoutEffect 의존성배열 :[]");
    return () => {
      console.log("⏱🧹return1 (unmount_1)");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("⏱2.useLayoutEffect 의존성배열X");
    return () => {
      console.log("⏱🧹return2 (unmount_1)");
    };
  });
  // 의존성 배열 X
  useLayoutEffect(() => {
    console.log("⏱3.useLayoutEffect 의존성배열:[num]");
    return () => {
      console.log("⏱🧹return3 (unmount_1)");
    };
  }, [num]);
  // 의존성 배열 num

  useEffect(() => {
    console.log("🎈1.useEffect 의존성배열 :[]");
    return () => {
      console.log("🎈🧹return1 (unmount_1)");
    };
  }, []);

  useEffect(() => {
    console.log("🎈2.useEffect 의존성배열X");
    return () => {
      console.log("🎈🧹return2 (unmount_1)");
    };
  });
  // 의존성 배열 X

  useEffect(() => {
    console.log("🎈3.useEffect 의존성배열:[num]");
    return () => {
      console.log("🎈🧹return3 (unmount_1)");
    };
  }, [num]);
  // 의존성 배열 num

  return (
    <div className="App">
      <button onClick={handleonClick}>{num}</button>
    </div>
  );
}

const Wrap = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => setIsVisible(!isVisible);
  return (
    <>
      <button onClick={handleClick}>
        {isVisible ? "언마운트시키기" : "마운트시키기"}
      </button>
      <br></br>
      {isVisible && <App />}
    </>
  );
};

export default App;
