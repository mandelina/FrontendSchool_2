import styled from "styled-components";

//div태그에서의 style
const AA = styled.div`
  margin: 40px;
`;

//class네이밍을 할 필요 없이 태그를 통해 연결시켜줌
//h2태그에서의 style
const BB = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const UnicornAfter = styled.div`
  &:after {
    content: " ??";
  }
`;

const App = () => {
  return (
    <AA>
      <BB>Hello World</BB>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem
        dignissimos dicta expedita praesentium. Voluptates ratione magnam
        dolores ea! Possimus earum odio optio tempore laboriosam eligendi
        deleniti? Adipisci, a nam!
      </p>
    </AA>
  );
};

export default App;
