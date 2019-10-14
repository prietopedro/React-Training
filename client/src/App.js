import React, { useState } from 'react';
import MovieList from "./Movies/MovieList";
import {Route} from "react-router-dom";
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  
  
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" exact component={MovieList} />
      <Route path="/movies/:DataId" render={props => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
