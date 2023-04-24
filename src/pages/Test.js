import "../css/test.css";
import testData from "../data/test.json";
console.log(testData);

const Test = () => {
  return (
    <div>
      test
      <div>
        {testData.map((item) => {
          return (
            <div style={{ whiteSpace: "pre-wrap" }} key={item.id}>
              {item.address}
              {item.descriptionUrl}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Test;
