import React from 'react'

function LandingPage (props) {
    return <div>
            <link rel="stylesheet" href="/stylesheets/style.css"/>
            <h1>Welcome to Cool Tech Credential Management</h1>
            <p>Please provide the information below to register:</p>
            <form action="/register">
                <label for="name">Please enter your name and surname: </label>
                <input type="text" placeholder="Name & Surname" name="name" id="name" required/><br/><br/>
                <label for="orgUnit">Please enter your Organisational Unit: </label>
                <input type="text" placeholder="Organisational Unit" name="orgUnit" id="orgUnit" required/><br/><br/>
                <label for="division">Please enter your division: </label>
                <input type="text" placeholder="Division" name="division" id="division" required/><br/><br/>
                <label for="username">Please enter your username: </label>
                <input type="text" placeholder="Username" name="username" id="username" required/><br/><br/>
                <label for="password">Please enter your password: </label>
                <input type="password" placeholder="Password" name="password" id="password" required/><br/><br/>
                
                <button type="submit">SUBMIT</button>
            </form>
            <p>If you are already registered, click the button below to go to the login page</p>
            <a class="linkButton" href="/login">LOGIN</a>
        </div>
    }

export default LandingPage