import "../css/test.css";
import HeaderGreen2 from "../components/HeaderGreen2";
import { useState } from "react";

// console.log("TEST", exterieur[4].zooms);

const Test = ({ selectedId, setSelectedId }) => {
  const [myStyle, setMyStyle] = useState({});
  const messages = [
    { content: "hi" },
    { content: "bonjour" },
    { content: "hola" },
  ];

  const handleClick = (id) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      <HeaderGreen2
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      ></HeaderGreen2>
      <div>test</div>
      <div>
        {messages.map((message, i) => (
          <div
            key={i}
            style={{
              boxShadow: myStyle[`${i}`]
                ? "4px 3px 8px 0px rgba(1, 156, 48, 0.3)"
                : "initial",
            }}
            onClick={() => handleClick(i)}
          >
            {message.content}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Test;
