import React from 'react';
import axios from 'axios';
import Getalltutors from './Getalltutors';
import './Register.css';
 
class ParentRegistration extends React.Component{
    constructor(){
        super();
        this.state={
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: ""
        }
        this.oninputchange = this.oninputchange.bind(this);
        this.formsubmit =  this.formsubmit.bind(this);
    }
    oninputchange(event){
        event.preventDefault();
        var name = event.target.name;
        var value = event.target.value;
        this.setState({[name]:value})
    }
    // formsubmit(event){
    //     event.preventDefault();
    //     console.log(this.state);
    //     // alert('Parent registration successfull');
    //     axios.post("http://localhost:9012/v1/parent/register", this.state).then(
    //         (response)=>{
    //             // console.log(response);
    //             if(response.data.status){
    //                 var token = localStorage.setItem('token', response.data.token)
    //                 this.props.history.push('/Getalltutors')
    //             }
    //             else{
    //                 alert('Something went wrong')
    //             }
    //         }
    //     ).catch((err)=>{
    //         if(err.response.status === 409){
    //         // console.log(err);
    //         console.log(err.response);
    //         // console.log(err.response.data.description);
    //         alert(err.response.data.description);
    //         }
    //         if(err.response.status === 500){
    //             console.log(err.response);
    //             alert('* indicated fields are required')
    //         }
            
            
    //     })
    //     // this.props.history.push('/Getalltutors')
    // }
    formsubmit(event){
        event.preventDefault();
        this.props.history.push('/Payment');
        // console.log(this.state);
        localStorage.setItem('userdetails', JSON.stringify(this.state));
        
        // alert('Parent registration successfull');
        
    }
    


    render(){
        return(
            <React.Fragment>
            {/* <form onSubmit={this.formsubmit} class="form-group">
                firstname: <input onChange={this.oninputchange} type="text"  class="form-control" name="firstname"></input>
                lastname: <input onChange={this.oninputchange} type="text"  class="form-control" name="lastname"></input>
                email: <input onChange={this.oninputchange} type="email"  class="form-control" name="email"></input>
                phone: <input onChange={this.oninputchange} type="text"  class="form-control" name="phone"></input>
                password: <input onChange={this.oninputchange} type="password"  class="form-control" name="password"></input><br></br><br></br>

                <button class="btn btn-success">Register</button>
            </form> */}

<div class="container register-form">
            <div class="form">
            <div class="note">
                    <p>Parent Registration</p>
                </div>
                <div class="form-content">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <input onChange={this.oninputchange} type="text" class="form-control" name="firstname" placeholder="firstname *"/>
                            </div>
                            <div class="form-group">
                                <input onChange={this.oninputchange} type="text" class="form-control" name="lastname" placeholder="lastname *"/>
                            </div>
                            <div class="form-group">
                                <input onChange={this.oninputchange} type="email" class="form-control" name="email" placeholder="email *"/>
                            </div>
                        </div>
                        <div class="col-sm-6">
                        <div class="form-group">
                                <input onChange={this.oninputchange} type="text" class="form-control" name="phone" placeholder="phone *"/>
                            </div>
                            <div class="form-group">
                                <input onChange={this.oninputchange} type="password" class="form-control" name="password" placeholder="password *"/>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.formsubmit} type="button" class="btnSubmit btn-success">Submit</button>
                </div>
            </div>
        </div>

            </React.Fragment>
        )
    }
}

export default ParentRegistration;