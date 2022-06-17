import { useContext } from "react";
import { productInfo } from "./context/productInfo";

const HelloLicatFour = () => {
  const { name, price } = useContext(productInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{price}</strong>
    </div>
  );
};

export default HelloLicatFour;
