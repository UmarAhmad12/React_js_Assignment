import "./App.css";
import Person from "./components/Person";
import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <>
      <Person name="Umar Ahmad" age="24" />
      <Button text="Click Here" onClick={handleClick} />
      <Header title="This is the Header Elements" />
      <List items={items} />
    </>
  );
}

export default App;
