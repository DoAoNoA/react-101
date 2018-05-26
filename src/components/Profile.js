import React, { Component } from 'react';
import profilePicture from '../imgs/profilePicture.jpg';
import '../css/Profile.css';

class Profile extends Component{
    render(){
        return (
          <div>
              <img src={profilePicture} alt="logo"/>
              <h2>Full Stack developer in trainnig</h2>
          </div>
        )
    }
}

export default Profile;