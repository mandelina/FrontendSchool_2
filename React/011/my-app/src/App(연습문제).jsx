import React, { useState } from "react";

function App1() {
  return <Navbar />;
}

function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ea omnis
        eveniet earum perferendis, optio ab enim minima vel, repellendus unde
        debitis doloribus nulla quam impedit quos repudiandae eum at!
      </p>
    </>
  );
}

function Product() {
  return (
    <>
      <h2>Product</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquam,
        accusamus debitis dolores tempore recusandae at nesciunt eum
        exercitationem quod harum nulla cum quibusdam deleniti modi numquam
        fuga? Similique, et!
      </p>
    </>
  );
}

function Contact() {
  return (
    <>
      <h3>Contact</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquam,
        accusamus debitis dolores tempore recusandae at nesciunt eum
        exercitationem quod harum nulla cum quibusdam deleniti modi numquam
        fuga? Similique, et!
      </p>
    </>
  );
}

const ContentContainer = ({ listName }) => {
  if (listName === "about") {
    return <About />;
  } else if (listName === "product") {
    return <Product />;
  } else {
    return <Contact />;
  }
};

function Navbar() {
  const [listName, setListName] = useState("about");
  const chedId = (e) => {
    setListName(e.target.id);
  };
  return (
    <>
      <nav>
        <ul>
          <li
            id="about"
            style={
              listName === "about" ? { color: "blue" } : { color: "black" }
            }
            onClick={chedId}
          >
            about
          </li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li
            id="product"
            style={
              listName === "product" ? { color: "blue" } : { color: "black" }
            }
            onClick={chedId}
          >
            product
          </li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li
            id="contact"
            style={
              listName === "contact" ? { color: "blue" } : { color: "black" }
            }
            onClick={chedId}
          >
            contact
          </li>
        </ul>
      </nav>
      <ContentContainer listName={listName} />
    </>
  );
}
export default App1;
