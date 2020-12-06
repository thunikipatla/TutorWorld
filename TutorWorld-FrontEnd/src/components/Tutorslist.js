import React from 'react';
import axios from 'axios';


class TutorsList extends React.Component{
    constructor(){
        super();

        // this.requestdemo = this.requestdemo.bind(this);
    }

    // requestdemo(event){
    //     event.preventDefault();
    //     alert('request is submitted');
    //     console.log();
    // }

     rendertutorslist(){  
            var tutorslist = this.props.tutors.map((tutor)=>{
                // console.log('console from renderlist',tutor);
                return (
            //     <li key={tutor.firstname}>
            //     Name: {tutor.firstname} {'\n'}
            //           {tutor.lastname} {'\n'}
            //     Email: {tutor.email}  {'\n'}
            //     Total Experience: {tutor.experience}  {'\n'}
            //     Qualification: {tutor.qualification}  {'\n'}
            //     Subjects: {tutor.subjects}  {'\n'}
            //    Prefred timings: {tutor.timings}  {'\n'}
            //    Phonenumber: {tutor.phone} {'\n'}
            //     </li>
            
                <tr>
                         <th scope="row">.</th>
                         <td>{tutor.firstname}</td>
                         <td>{tutor.lastname}</td>
                         <td>{tutor.email}</td>
                         <td>{tutor.experience}</td>
                         <td>{tutor.qualification}</td>
                         <td>{tutor.subjects}</td>
                         <td>{tutor.timings}</td>
                         <td>{tutor.city}</td>
                         <td>{tutor.area}</td>
                         <td>{tutor.phone}</td>
                         <td><button onClick={(event)=>{event.preventDefault();
                            var parenttoken = localStorage.getItem('token');
                            var email = [tutor.email];
                            axios.post('http://localhost:9012/v1/tutor/tutordemo',{"email": email},{headers: {
                                'token': `${parenttoken}`
                              }}).then(
                                (response)=>{
                                    if(response.data.status && parenttoken ){
                                        alert("request submitted to"+  " " +tutor.firstname + " " + tutor.lastname);
                                    }
                                }
                            )  
                            }} class="btn btn-success">RequestDemo</button></td>
                        
                </tr>
                )
            })
    
        
        return tutorslist;
        
    }
    render(){
        // console.log('Tutors console',this.props.tutors[0])
        return(
            <div>
                {/* <h1>This is from Tutors List</h1> */}
                {/* {this.props.tutors.length} */}
               {/* <ul>
                    {this.rendertutorslist()}
                </ul> */}
             <table class="table table-hover table-bordered">
                 <thead class="table table-bordered thead-light">
                      <tr>
                          <th>#</th>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Email</th>
                         <th>Total Experience</th>
                         <th>Qualification</th>
                         <th>Subjects</th>
                         <th>Prefred timings</th>
                         <th>City</th>
                         <th>Prefred areas</th>
                         <th>Phonenumber</th>
                         <th>DemoLink</th>                  
                     </tr>
                 </thead>
                 <tbody>
                 {this.rendertutorslist()}
                 </tbody>
             </table>
            
            
            </div>
        )
    }
}

export default TutorsList;