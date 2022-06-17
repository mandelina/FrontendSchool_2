import { useContext } from "react";
import { darkmode } from "./context/darkmode";
import HelloLicatFour from "./HelloLicatFour";

const HelloLicatThree = () => {
  const mode = useContext(darkmode);
  return (
    <div>
      <h2>{mode + " "}</h2>
      <HelloLicatFour />
    </div>
  );
};

export default HelloLicatThree;
