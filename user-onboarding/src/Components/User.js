import React from 'react'

export default function User (props) {
const { users } = props

if(!users) {
    return <h3>Working on getting users...</h3>
}

    return (
        <div>
        <h4>User</h4>
        Username: {users.username}{users.first_name}
        &nbsp;Email: {users.email}
        </div>
    )
}
