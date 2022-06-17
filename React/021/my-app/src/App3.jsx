import { useContext, createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return <HelloLicat />;
};

// const HelloLicat = () => {
//   return (
//     <UserInfo.Consumer>
//       {(value) => (
//         <div>
//           <input type="text" />
//           <h2>{value.name}</h2>
//           <strong>{`@ ${value.id}`}</strong>
//         </div>
//       )}
//     </UserInfo.Consumer>
//   );
// };

const HelloLicat = () => {
  //Hook - useContext를 사용하여 더 편리하게 !!
  // Context.consumer 보다 훨씬편함
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
    </div>
  );
};

export default App;
