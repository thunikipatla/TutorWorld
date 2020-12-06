import React from 'react';
import axios from 'axios';
import TutorProfileList from './TutorProfileList';

class TutorProfile extends React.Component{
    constructor(){
        super();
        this.state={
            tutorprofile: []
        }
    }
    componentDidMount(){
        var authtoken = localStorage.getItem('token')
        axios.get('http://localhost:9012/v1/tutor/profile',{headers: {
            'token': `${authtoken}`
          }}).then(
              (response)=>{
                  if(response.data.status && authtoken){
                    //   console.log('profile',JSON.stringify(response.data.decodedtoken.payload.phone));
                    // this.setState({tutorprofile: response.data.decodedtoken.payload.phone});
                    this.setState({tutorprofile: response.data.decodedtoken.payload.phone});
                    // console.log(this.state.tutorprofile);
                
                  }
                //   console.log(response);
                // console.log(response.data.decodedtoken.payload.phone);
                
              }
          )
    }

    render(){
        if(localStorage.getItem('token')){
            return(
           
                <div>
                    <h2>Tutor profile</h2>
                    <TutorProfileList profile={this.state}/>
                </div>
            )
        }
        return (
            <h3>Please login to see the your profile</h3>
        )
        
    }
}
export default TutorProfile;