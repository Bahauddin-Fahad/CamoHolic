import "./App.css";
import Header from "./component/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./component/Shop/Shop";
import QandA from "./component/QandA/QandA";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <QandA></QandA>
    </div>
  );
}

export default App;
