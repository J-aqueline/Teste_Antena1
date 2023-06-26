import React, { Fragment } from 'react';
import './App.css';

// components
import InputUsers from "./components/InputUsers";
import ListUsers from "./components/ListUsers";

function App() {
  return (
    <Fragment>
    <div className="container">
      <InputUsers />
      <ListUsers />
    </div> 
  </Fragment>
  );
};

export default App;
