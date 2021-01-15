import React, { Component, useEffect, useState } from 'react';
import Header from './components/Header.js';
import List from "./components/List.js"
import Content from "./components/Content.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <List /> */}
        <Route path="/content" component={Content}></Route>
        <Route path="/list" component={List}></Route>
      </Router>
    </>
  );
}

export default App;