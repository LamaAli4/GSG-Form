// import Alert from "./components/Alert";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
export default function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />{" "} */}
      {/* <Alert > */}
      {/* Hello <span>World</span> */}
      {/* </Alert> */}

      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  );
}
