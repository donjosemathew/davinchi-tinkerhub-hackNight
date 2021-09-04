import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserData from "./Pages/data";
import Home from "./Pages/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:slug" component={UserData} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
