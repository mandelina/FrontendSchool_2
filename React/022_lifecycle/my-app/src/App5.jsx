import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";

export default function App() {
  const [modalShow, setModalShow] = useState(false);
  const modal = useRef();
  const button = useRef();

  useEffect(() => {
    if (modal.current == null || button.current == null) {
      return;
    }

    const { bottom } = button.current.getBoundingCilentRect();

    modal.current.style.color = "red";
    modal.current.style.top = `${bottom + 30}px`;
  }, [modalShow]);
  return (
    <div className="App">
      <button ref={button} onClick={() => setModalShow(!modalShow)}>
        show me the 모달!
      </button>
      {modalShow && <div ref={modal}>modal</div>}
      {/* {modalShow ? ( <div>modal</div>):null} */}
      {/* 위와 같은코드 */}
    </div>
  );
}
