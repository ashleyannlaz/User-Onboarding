import './App.css';
import Form from './Form'
import React, { useState } from 'react'
import axios from 'axios'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false,
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)

  const changeForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  return (
    <div className="App">
      <Form 
        values={formValues} change={changeForm} />
    </div>
  );
}

export default App;
