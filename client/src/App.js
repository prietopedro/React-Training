import React, { useState } from 'react';
import MovieList from "./Movies/MovieList";
import {Route} from "react-router-dom";
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [id, setId] = useState()
  
  
  const addToSavedList = movie => {
    // setId(props.match.params.DataId)
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" exact component={MovieList} />
      <Route path="/movies/:DataId" exact render={props => <Movie {...props} setId={setId}id={id} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
