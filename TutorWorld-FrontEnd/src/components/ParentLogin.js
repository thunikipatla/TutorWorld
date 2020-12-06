import React from 'react';
import axios from 'axios';
// import Getalltutors from './Getalltutors';
import Getalltutors from './Getalltutors';
import './Login.css';

class ParentLogin extends React.Component{
    constructor(){
        super();
        this.state={
            phone: "",
            password: ""
        }
        this.oninputchange = this.oninputchange.bind(this);
        this.formsubmit = this.formsubmit.bind(this);
    }

    oninputchange(event){
        event.preventDefault();
        var name = event.target.name;
        var value = event.target.value;
        this.setState({[name]:value})
    }
    formsubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:9012/v1/parent/parentlogin", this.state).then(
            (response)=>{
                if(response.data.status){
                    var token = localStorage.setItem('token', response.data.token);
                    this.props.history.push('/Getalltutors')
                }
            }
        ).catch((err)=>{
            if(err.response.status === 404){
                // console.log(err);
                console.log(err.response);
                alert(err.response.data.description);
                // console.log(err.response.data.description);
            
            } 
            else {
                console.log(err.response);
                alert('server error');
            }
    
        })
    }

    render(){
        return(
            // <form onSubmit={this.formsubmit} class="form-group">
            //     phone: <input onChange={this.oninputchange} type="text" class="form-control" name="phone"></input>
            //     password: <input onChange={this.oninputchange} type="password" class="form-control" name="password"></input><br></br>
            //     <button class="btn btn-success">Login</button>

            // </form>
            <div class="row">
                <div class="col-md-4">

                </div>
                <div class="col-md-4 login-form-1">
                    <h3>Parent Login</h3>
                    <form onSubmit={this.formsubmit}>
                        <div class="form-group">
                        <input onChange={this.oninputchange} type="text" class="form-control" placeholder="phone *" name="phone"></input>
                        </div>
                        <div class="form-group">
                        <input onChange={this.oninputchange} type="password" class="form-control" placeholder="password *" name="password"></input>
                        </div>
                        <div class="form-group">
                        <button class="btn btn-success">Login</button>
                        </div>
                        <div class="form-group">
                            <a href="#" class="ForgetPwd">Forget Password?</a>
                        </div>
                    </form>
                </div>
                </div>
        )
    }
}
export default ParentLogin;