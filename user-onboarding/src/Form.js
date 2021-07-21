import React from 'react'

export default function Form (props) {
    const { values, change } = props

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
      }

    return (
        <form>
        <div>
            <h4>User Information</h4>
            <label>Name
                <input 
                    name='username'
                    type='text'
                    onChange={onChange}
                    value={values.username}
                />
            </label>
            <label>Email
                <input 
                name='email'
                type='text'
                onChange={onChange}
                value={values.email}
                />
            </label>
            <label>Password
                <input 
                name='password'
                type='text'
                onChange={onChange}
                value={values.password}
                />
            </label>

            {/* C H E C K B O X */}
            <label>Terms of Service 
                <input 
                    type='checkbox'
                    name='tos'
                    checked={values.tos}
                    onChange={onChange}
                />
            </label>

            <button>submit</button>
        </div>
        </form>
    )
}