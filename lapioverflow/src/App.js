import React from 'react';
import Write from "./components/Write.js";
import List from "./components/List.js"
import Content from "./components/Content.js";
import QDetail from "./components/QDetail.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route path="/write" component={Write}></Route>
        <Route path="/detail" component={QDetail}></Route>
        <Route path="/content" component={Content}></Route>
        <Route path="/list" component={List}></Route>
      </Router>
    </>
  );
}

export default App;