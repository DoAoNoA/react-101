import React, { Component } from 'react';
import '../css/MyContact.css';

class MyContact extends Component{
    render(){
        return (
            <div>
                <h1>Datos de contacto</h1>
                <p>Mail: aguirre.daniela010@gmail.com</p>
                <p>GitHub: <a target="_blank" href="https://github.com/DoAoNoA/">https://github.com/DoAoNoA/</a> </p>
            </div>
        )
    }
}

export default MyContact;