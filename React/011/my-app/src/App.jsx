import React, { useState } from "react";

function App() {
  return <NavBar />;
}

function Detail() {
  return <h1>helloworld 1</h1>;
}

function Question() {
  return <h2>helloworld 2</h2>;
}

function Review() {
  return <h3>helloworld 3</h3>;
}

const ContentsContainer = ({ listName }) => {
  if (listName === "detail") {
    return <Detail />;
  } else if (listName === "qa") {
    return <Question />;
  } else if (listName === "review") {
    return <Review />;
  }
};

//현재 클릭한 값의 id를 listName에 set한다.
function NavBar() {
  const [listName, setListName] = useState("detail");
  const checkId = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="detail"
            style={
              listName === "detail" ? { color: "red" } : { color: "black" }
            }
            onClick={checkId}
          >
            상세정보
          </li>
          <li
            id="qa"
            onClick={checkId}
            style={listName === "qa" ? { color: "red" } : { color: "black" }}
          >
            Q&A
          </li>
          <li
            id="review"
            onClick={checkId}
            style={
              listName === "review" ? { color: "red" } : { color: "black" }
            }
          >
            Review
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
}

export default App;
