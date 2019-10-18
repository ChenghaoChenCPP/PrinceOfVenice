import React, { Component } from 'react';
import logo from './images/logo.png';
import background from './images/bk_header.png';


class Header extends Component {
    render() {
        return (
            <div style={backgroundStyle}>
                <img src={logo} style={logoStyle} className="App-logo" alt="logo"/>
            </div>                
        );
    }
}

const logoStyle = {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    maxWidth: 260,
    height:150,
    alignSelf: 'stretch',
    resizeMode: "stretch",
    textAlign: 'center'
}

const backgroundStyle = {
    height: 170,
    backgroundPosition: 'center 10px',
    backgroundColor: '#22498a',
    backgroundImage: "url(" + background + ")",
    backgroundRepeat: 'no-repeat',
    resizeMode: "stretch"
}

export default Header;