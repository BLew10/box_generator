
import React, { useState } from 'react';
import './App.css';
import ColorForm from './components/ColorForm';
import Box from './components/Box';
import DeleteForm from './components/DeleteForm';

function App() {

  const [boxes, setNewBox] = useState([])

  const addBoxColor = (color) => {
    setNewBox([...boxes,color])
  }
  const deleteBox = () => {
    boxes.pop()
    setNewBox([...boxes])
  }

  return (
    <div className="App">
      <ColorForm newColor={addBoxColor}/> 
      <DeleteForm deleteBox = {deleteBox}/>
      <Box boxes={boxes}/>
    </div>
  );
}

export default App;
