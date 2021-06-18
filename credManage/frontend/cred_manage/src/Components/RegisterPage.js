import React from 'react';

//create a new component that has state values
class RegisterPage extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user: []
    };
  }

  //use a componenet to fetch the api values once the component is mounted
  componentDidMount () {
    const urlParam = new URLSearchParams(window.location.search);
    const name = urlParam.get('name')
    const orgUnit = urlParam.get('orgUnit')
    const division = urlParam.get('division')
    const username = urlParam.get('username')
    const password = urlParam.get('password')

    fetch("/register?name=" + name +"&orgUnit=" + orgUnit +"&division=" + division +"&username=" + username +"&password=" + password + "")
    //convert result values to plain text
    .then(res => res.json())
      .then(
        (result) => {
          //set state to be loaded with the user loaded from the JSON via api
          this.setState ({
            isLoaded: true,
            user: result
          });
        },
        //if error is encountered, output error
        (error) => {
          this.setState ({
            isLoaded: true,
            error
          });
        }
      )
  }

  render () {
    //set the state based on current values
    const { error, isLoaded, user } = this.state;
    //if the error becomes set, displpay the error message
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    //if isLoaded is not set to true, shows default loading user
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    /*if everything is set and user is loaded, render the github related information of the searched user*/
    else {
        return <div>
            {user.msg}
            <br/>
            <a class="linkButton" href="/login">LOGIN</a>
          </div>;
    }
  }
}


export default RegisterPage;