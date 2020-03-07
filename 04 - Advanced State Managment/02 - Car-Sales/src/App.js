import React from 'react';
import Cars from "./components/Cars"
import Car from "./components/Car"
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Route exact path="/" component={Cars} />
    <Route exact path="/:carname" component={Car} />
    </>
  );
};

export default App;
