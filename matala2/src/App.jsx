import { useState } from 'react'
import ColorButton from './components/ColorButton';
import FormComponent from './components/FormComponent';
import TableComponent from './components/TableComponent';

import './App.css'

function App() {
  
  return (
    <div>
      <h1>Basic React - 2 תרגיל</h1>
      <ColorButton />
      <FormComponent />
      <br />
      <TableComponent />
    </div>
  );
}

export default App
