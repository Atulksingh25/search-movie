   import React from 'react';
   
import TipCalculator from './TipCalculator.js'
import './App.css'; // Assuming you have an App.css file for styling
  // Adjust the path as necessary
function App() {
  const name = "React User"; // Example variable

  return (
    <div className="App">
      <TipCalculator />
    </div>  
  );
} 

export default App;