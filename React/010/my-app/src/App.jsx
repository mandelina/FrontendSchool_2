import React, { useState } from "react";
function Resume(props) {
  const [like, setLike] = useState(0); // 0 은 초기값
  const [heart, setHeart] = useState("");
  //useState 리턴값- > [변수,변수를 변경할수 있는 함수]
  //변경되는 애들을 감지함
  // setLike 함수 like 변수
  //setLike라는 함수로만 like변수를 변경시킬 수 있다.
  function handleclickLike() {
    setLike(like + 1);
    console.log(like);
  }

  function Heart() {
    if (!heart) {
      setHeart("😘");
    } else {
      setHeart("");
    }
  }
  return (
    <div>
      <button onClick={handleclickLike}>
        like <span>{like}</span>
      </button>

      <button onClick={Heart}>하트 넣을꼬얌</button>
      <span>{heart}</span>
    </div>
  );
}

function Like(props) {
  const [like, setLike] = useState(false);

  function handleclickLike() {
    if (like === "") {
      setLike("Like");
    } else {
      setLike("");
    }
  }

  return (
    <div>
      <button onClick={handleclickLike}>like</button>
      <span>{like}</span>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
      <Like />
    </div>
  );
}

export default App;
