import React, { Component } from 'react';
import profilePicture from '../imgs/profilePicture.jpg';

class Profile extends Component{
    render(){
        return (
          <div>
              <img src={profilePicture} alt="logo"/>
              <p>Full Stack in traninig</p>
          </div>
        )
    }
}

export default Profile;