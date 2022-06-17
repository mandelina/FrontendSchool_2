import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return <HelloLicat />;
};

const HelloLicat = () => {
  return (
    // UserInfo의 정보를 사용(소비)하겠다!

    //props를 주지 않았는데도 정보를 사용할 수 있다.

    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatTwo />
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatThree />
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatThree = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default App;
