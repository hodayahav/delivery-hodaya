import {BrowserRouter as Router} from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import routes from "./common/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderMenu />
        {routes}
      </Router>
    </div>

  );
}

export default App;
