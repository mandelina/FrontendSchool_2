import { useContext } from "react";
import { userinfo } from "./context/userinfo";
import HelloLicatThree from "./HelloLicatThree";

const HelloLicatTwo = () => {
  const { name, id, email } = useContext(userinfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
      <p>{email}</p>
      <HelloLicatThree />
    </div>
  );
};

export default HelloLicatTwo;
