import React from 'react';
import axios from 'axios';
import './Register.css';

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: "",
            qualification: "",
            subjects: "",
            timings: "",
            experience: "",
            rating: "",
            city: "",
            area: ""
            // image: ""
        }
        this.oninputchange = this.oninputchange.bind(this);
        this.formsubmit = this.formsubmit.bind(this);
    }
    oninputchange(event){
        event.preventDefault();
        var value = event.target.value;
        var name = event.target.name;
        this.setState({[name]:value});
    }
    formsubmit(event){
        // event.preventDefault();
        // console.log(this.state);
        // alert('Regustration successfull');
        axios.post("http://localhost:9012/v1/tutor/registration", this.state).then(
            (response)=>{
                if(response.data.status){
                    alert('Registration done, now you can able to access to your profile by going to Login page');
                    this.props.history.push('/');
                }
            }
        ).catch((err)=>{
            if(err.response.status === 409){
                // console.log(err);
                console.log(err.response);
                // console.log(err.response.data.description);
                alert(err.response.data.description);
                }
                if(err.response.status === 500){
                    console.log(err.response);
                    alert('* indicated fields are required')
                }
                else {
                    alert('server error');
                }
        })
        
    }

    render(){
        return(
            // <div>
            //     <form onSubmit={this.formsubmit} class="form-group">
            //         firstname: <input onChange={this.oninputchange} type="text" class="form-control" name="firstname"></input>
            //         lastname: <input onChange={this.oninputchange} type="text" class="form-control" name="lastname"></input>
            //         email: <input onChange={this.oninputchange} type="email" class="form-control" name="email"></input>
            //         phone: <input onChange={this.oninputchange} type="text" class="form-control" name="phone"></input>
            //         password: <input onChange={this.oninputchange} type="password" class="form-control" name="password"></input>
            //         qualification: <input onChange={this.oninputchange} type="text" class="form-control" name="qualification"></input>
            //         subjects: <input onChange={this.oninputchange} type="text" class="form-control" name="subjects"></input>
            //         timings: <select onChange={this.oninputchange} class="form-control" name="timings">
            //             <option value="Please select the value">Please select the value</option>
            //             <option value="Morning">Morning</option>
            //             <option value="evening">evening</option>
            //         </select>
            //         {/* timings: <input onChange={this.oninputchange} type="text" name="timings"></input><br></br><br></br> */}
            //         experience: <input onChange={this.oninputchange} type="text" class="form-control" name="experience"></input>
            //         Self rating: <input onChange={this.oninputchange} type="text" class="form-control" name="rating"></input><br></br>
            //         {/* Photo: <input onChange={this.oninputchange} type="file" name="image"></input><br></br><br></br> */}
            //         <button class="btn btn-success">Register</button>
            //     </form>
                

            // </div>
            <React.Fragment>
                    <div class="container register-form">
            <div class="form">
                <div class="note">
                    <p>Tutor Registration</p>
                </div>

                <div class="form-content">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                            <input onChange={this.oninputchange} class="form-control" type="text" name="firstname" placeholder="firstname *"></input>
                            </div>
                            <div class="form-group">
                            <input onChange={this.oninputchange} class="form-control" type="text" name="lastname" placeholder="lastname *"></input>
                            </div>
                            <div class="form-group">
                            <input onChange={this.oninputchange} class="form-control" type="email" name="email" placeholder="email *"></input>
                            </div>
                            <div class="form-group">
                            <input onChange={this.oninputchange} class="form-control" type="phone" name="phone" placeholder="phone *"></input>
                            </div>
                            <div class="form-group">
                            <input onChange={this.oninputchange} class="form-control" type="password" name="password" placeholder="password *"></input>
                            </div>
                            <div class="form-group">
                            <input onChange={this.oninputchange} class="form-control" type="text" name="qualification" placeholder="qualification *"></input>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                            <input onChange={this.oninputchange} class="form-control" type="text" name="subjects" placeholder="subjects *"></input>
                            </div>
                            <div class="form-group form-control">
                            <select onChange={this.oninputchange} class="form-control" name="timings">
                            <option value="Please select the value" >Timings</option>
                            <option value="Morning">Morning</option>
                            <option value="evening">evening</option>
                            </select>
                            </div>
                            <div class="form-group">
                            <input onChange={this.oninputchange} class="form-control" type="text" name="experience" placeholder="experience *"></input>
                            </div>
                            <div class="form-group">
                            <input onChange={this.oninputchange} class="form-control" type="text" name="rating" placeholder="Self rating *"></input>
                            </div>
                            <div class="form-group">
                            <input onChange={this.oninputchange} class="form-control" type="text" name="city" placeholder="City *"></input>
                            </div>
                            <div class="form-group">
                            <input onChange={this.oninputchange} class="form-control" type="text" name="area" placeholder="Preferred areas *"></input>
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

export default Register;