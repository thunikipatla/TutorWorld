import React from 'react';
import Header from './Header';
import Home from './Home';

class Logout extends React.Component{
    render(){
        
      localStorage.removeItem('token')
            return(
                // <Header/>
                <Home/>
                
            )
       
        
        
    }
}

export default Logout;