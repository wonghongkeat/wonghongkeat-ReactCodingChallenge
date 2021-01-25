import React from 'react'
import Images from './images'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import ScrollUpButton from "react-scroll-up-button";

function App() {
  return (
    <div className="App">
        <ScrollUpButton />
        <h1>Unsplash Infinite scrolling</h1>
        <p>Scroll through to enjoy an array of wonderful image from <a href="https://unsplash.com/">Unsplash</a></p>
        <Images/>
    </div>
  );
}

export default App;
