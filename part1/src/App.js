import "./App.css";
import Mensaje from "./Mensaje";

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" msg="Estamos trabajando" />
      <Mensaje color="green" msg="en el curso" />
      <Mensaje color="yellow" msg="de React" />
      <Mensaje />
      <Mensaje />
    </div>
  );
};

export default App;
