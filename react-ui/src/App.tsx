// import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ['New York', 'San Francisco', 'Jaipur'];
  return(
  <div>
    <ListGroup items={items} heading={"Cities"} /></div>);
}

export default App;