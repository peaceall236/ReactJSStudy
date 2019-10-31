import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux"
import store from "./store"


import PostContainer from './components/Post';
import PostFormContainer from './components/PostForm'


function App() {
  console.log(store.getState())
  return (
    <Provider store={store}>
      <div className="App">
        <PostFormContainer/>
        <PostContainer/>
      </div>
    </Provider>
  );
}

export default App;
