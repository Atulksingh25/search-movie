   import React from 'react';
   
import MusicPlayer from './MusicPlayer.js'
import './App.css'; // Assuming you have an App.css file for styling
  // Adjust the path as necessary
function App() {
  const name = "React User"; // Example variable

  return (
    <div className="App">
      <MusicPlayer />
    </div>  
  );
} 

export default App;