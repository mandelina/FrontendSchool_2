import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return <HelloLicat />;
};

const HelloLicat = () => {
  return (
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
    <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
      <UserInfo.Consumer>
        {(value) => (
          <div>
            <h2>{value.name}</h2>
            <strong>{value.id}</strong>
          </div>
        )}
      </UserInfo.Consumer>
    </UserInfo.Provider>
  );
};

export default App;
