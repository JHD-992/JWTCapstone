import React from 'react';

//create a new component that has state values
class OpUserDash extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      creds: []
    };
  }

  //use a component to fetch the api values once the component is mounted
  componentDidMount () {

    fetch("/creds?orgUnit=Opinion Publishing")
    //convert result values to plain text
    .then(res => res.json())
      .then(
        (result) => {
          //set state to be loaded with the user loaded from the JSON via api
          this.setState ({
            isLoaded: true,
            creds: result
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
            <h1>Welcome to Cool Tech Credential Management</h1>
            <h2>News Management User Site</h2>
            <table>
                <tr><th>Name</th><th>Organisationl Unit</th><th>Division</th><th>Username</th><th>Password</th></tr>
                {creds.map(cred => (
                <tr key={cred.id}>
                    <td>{cred.name}</td><td>{cred.orgUnit}</td><td>{cred.division}</td><td>{cred.username}</td>
                    <td>{cred.password}</td>
                </tr>
                ))}
        </table>
        </div>
    }
  }
}


export default OpUserDash;