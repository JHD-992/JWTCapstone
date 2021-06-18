import React from 'react'

function LoginPage (props) {
    return <div>
            <link rel="stylesheet" href="/stylesheets/style.css"/>
            <h1>Welcome to Cool Tech Credential Management</h1>
            <p>Please provide the information below:</p>
            
            <form action="/dashboard">
                <label for="username">Please enter your username: </label>
                <input type="text" placeholder="Username" name="username" id="username" required/><br/><br/>
                             
                <button type="submit">SUBMIT</button>
            </form>

        </div>
    }

export default LoginPage