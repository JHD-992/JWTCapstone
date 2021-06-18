import React from 'react';
import NewsAdminDash from './NewsAdminDash';
import NewsUserDash from './NewsUserDash';
import NewsManDash from './NewsManDash';
import SoftUserDash from './SoftUserDash';
import SoftManDash from './SoftManDash';
import SoftAdminDash from './SoftAdminDash';
import HardUserDash from './HardUserDash';
import HardManDash from './HardManDash';
import HardAdminDash from './HardAdminDash';
import OpUserDash from './OpUserDash';
import OpManDash from './OpManDash';
import OpAdminDash  from './OpAdminDash';

//create a new component that has state values
class DashboardHeader extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      token: 'Bearer ' + this.props.token,
      creds: []
    };
  }

  //use a componenet to fetch the api values once the component is mounted
   componentDidMount () {
    fetch("/orgCreds", {method: 'GET',  headers : {Authorization: this.state.token}})
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
        //render appropriate news management unit dashboard
        if (creds.role === "NewsAdmin") {
            return <div>
                <NewsAdminDash />
            </div>
        }
        else if (creds.role === "NewsManage") {
            return <div>
                <NewsManDash />
            </div>
        }
        else if (creds.role === "NewsUser") {
            return <div>
                <NewsUserDash />
            </div>
        }

        //render appropriate software review unit dashboard
        else if (creds.role === "SoftAdmin") {
            return <div>
                <SoftAdminDash />
            </div>
        }
        else if (creds.role === "SoftManage") {
            return <div>
                <SoftManDash />
            </div>
        }
        else if (creds.role === "SoftUser") {
            return <div>
                <SoftUserDash />
            </div>
        }

        //render appropriate hardware review unit dashboard
        else if (creds.role === "HardAdmin") {
            return <div>
                <HardAdminDash />
            </div>
        }
        else if (creds.role === "HardManage") {
            return <div>
                <HardManDash />
            </div>
        }
        else if (creds.role === "HardUser") {
            return <div>
                <HardUserDash />
            </div>
        }

        //render appropriate opinion publishing unit dashboard
        else if (creds.role === "OpAdmin") {
            return <div>
                <OpAdminDash />
            </div>
        }
        else if (creds.role === "OpManage") {
            return <div>
                <OpManDash />
            </div>
        }
        else if (creds.role === "OpUser") {
            return <div>
                <OpUserDash />
            </div>
        }

        //if user is not assigned an expected role
        else {
            return <div>
            <h1>Welcome to Cool Tech Crendential Managemment.</h1>
            <p>You have not been assigned a valid role</p>
        </div>
        }
        
    }
  }
}


export default DashboardHeader;