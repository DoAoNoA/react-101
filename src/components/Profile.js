import React, { Component } from 'react';
import logo from '../imgs/profilePicture.jpg';

class Profile extends Component{
    render(){
        return (
          <div>
              <img src={logo} alt="logo"/>
              <p>Full Stack in traninig</p>
          </div>
        )
    }
}

export default Profile;