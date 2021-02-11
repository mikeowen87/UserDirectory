import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import directory from "./pages/directory";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={directory} />
          <Route exact path="/directory" component={directory} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
