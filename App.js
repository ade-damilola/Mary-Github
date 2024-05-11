// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RepositoryList from "./RepositoryList";
import RepositoryDetails from "./RepositoryDetails";
import NotFound from "./NotFound";
import ErrorBoundary from "./ErrorBoundary"; // Import ErrorBoundary component
import "./styles.css"; // Import CSS file

const App = () => {
  return (
    <Router>
      <div className="container">
        {" "}
        {/* Apply container class */}
        <Switch>
          <Route exact path="/">
            <ErrorBoundary>
              {" "}
              {/* Wrap RepositoryList component with ErrorBoundary */}
              <RepositoryList />
            </ErrorBoundary>
          </Route>
          <Route path="/repository/:repoName" component={RepositoryDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
