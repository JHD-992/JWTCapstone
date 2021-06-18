import React from 'react';

//create a new component that has state values
class UpdateDiv extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      creds: ''
    };
  }

  //use a component to fetch the api values once the component is mounted
  componentDidMount () {
    const urlParam = new URLSearchParams(window.location.search);
    const username = urlParam.get('username')
    const orgUnit = urlParam.get('orgUnit')
    const division = urlParam.get('division')

    fetch("/updateDiv?username=" + username +"&orgUnit=" + orgUnit + "&division=" + division + "")
    //convert result values to plain text
    .then(res => res.text())
      .then(
        (result) => {
          //set state to be loaded with the user loaded from the JSON via api
          this.setState ({
            isLoaded: true,
            creds: result
          });
          console.log(result)
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
    const { error, isLoaded, creds } = this.state;

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
          <link rel="stylesheet" href="/stylesheets/style.css"/>
          <p>{creds}</p>
        </div>
    }
  }
}


export default UpdateDiv;