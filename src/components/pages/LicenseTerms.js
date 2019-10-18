import React, { Component } from 'react';
import background from '../images/bk_content.png';

class LicenseTerms extends Component {
    render() {
        return (  
            <div style={backgroundStyle}>
                License Terms
            </div>         
        );
    }
}

const backgroundStyle = {
    height: 500,
    backgroundPosition: 'center',
    backgroundColor: '#22498a',
    backgroundImage: "url(" + background + ")",
    backgroundRepeat: 'no-repeat',
    resizeMode: "stretch"
}

export default LicenseTerms;