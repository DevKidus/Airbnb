import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";
import { DataProvider } from "./Context API/Data";

function App() {
  return (
    <Router>
      <DataProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </DataProvider>
    </Router>
  );
}

export default App;
