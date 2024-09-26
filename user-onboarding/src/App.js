import './App.css';
import Form from './Components/Form'
import User from './Components/User'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from './Validation/formSchema'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}

const initialUsers = []
const inDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [users, setUsers] = useState(initialUsers)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(inDisabled)

// gets API call from https://reqres.in/api/users
  const getUser = () => {
    axios
    .get('https://reqres.in/api/users')
    .then (res => {
      setUsers(res.data.data)
    }, []) 
    .catch (err => {
      console.log(err)
    }) 
  }

  // sends a post request
  const postNewUser = newUser => {
    axios
    .post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([...users, res.data])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      // sets form values to original after we submit user
      setFormValues(initialFormValues)
    })
  }

  const changeForm = (inputName, inputValue) => {
    validate(inputName,inputValue) //invokes validate funtion below
    setFormValues({ ...formValues, [inputName]: inputValue }) // adds values to state
  }

  const validate = (name, value) => {
    yup
    .reach (schema,name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: "" ,}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]
      // catch errors and set Form errors to post
    })
    )};

  const formSubmit = () => {
    //takes in values from the form and removes white space using .trim()
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid);
    }); //enables button that is disabled by default
  }, [formValues]);

  return (
    <div className="App">
      <Form 
        values={formValues} 
        change={changeForm} 
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        
        />

      {
        users.map(user => {
          return (
            <User 
              users={user}
              key={user.id}
            />
          )
        })
        
      }  
      
    </div>
  );
}

export default App;
