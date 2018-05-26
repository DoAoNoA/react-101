import React, { Component } from 'react';
import profilePicture from '../imgs/profilePicture.jpg';

class Profile extends Component{
    render(){
        return (
          <div>
              <img src={profilePicture} alt="logo"/>
              <h3>Full Stack developer in trainnig</h3>
          </div>
        )
    }
}

export default Profile;