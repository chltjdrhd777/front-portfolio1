import React from "react";
import HomePage from "containers/Homepage";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//#CSS PART START
const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;
//#CSS PART END

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
