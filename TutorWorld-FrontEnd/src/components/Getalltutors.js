import React from 'react';
import axios from 'axios';
import TutorsList from './Tutorslist';

class Getalltutors extends React.Component{
    constructor(){
        super();
        this.state={
            tutors:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:9012/v1/tutor/alltutors').then(
            (response)=>{
                // console.log(response);
                if(response.data.status){
                    if(localStorage.getItem('token')){
                        this.setState({tutors:response.data.tutors})
                    }
                    
                }
            }
        )
    }

    render(){
        if(localStorage.getItem('token')){
            return (
                <div>
                    <h3>Tutors List</h3>
                    {/* {this.state.tutors.length} */}
                    <TutorsList tutors={this.state.tutors}/>
    
                </div>
            )
        }
        return (
            <h3>Please login to see the tutor's list</h3>
        )
        
    }
}
export default Getalltutors;