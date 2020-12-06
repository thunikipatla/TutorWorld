import React from 'react';

class TutorProfileList extends React.Component{

    renderlist(){
        var length = Object.keys(this.props.profile.tutorprofile).length
        if(length > 0){
            // var length1 =  Object.keys(this.props.profile.tutorprofile).length
            var firstname = this.props.profile.tutorprofile.firstname;
            var lastname = this.props.profile.tutorprofile.lastname;
            var email = this.props.profile.tutorprofile.email;
            var phone = this.props.profile.tutorprofile.phone;
            var subjects = this.props.profile.tutorprofile.subjects;
            var timings = this.props.profile.tutorprofile.timings;
            var experience = this.props.profile.tutorprofile.experience;
            var rating = this.props.profile.tutorprofile.rating;
            // var details = [firstname,lastname,email,phone,subjects,timings,experience,rating]
            var details = <tr>
                <th scope="row">.</th>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{subjects}</td>
                <td>{timings}</td>
                <td>{experience}</td>
                <td>{rating}</td>
            </tr>
        }
        return details;
    }

    // renderlist(){

    //     var tutorprofilelist = this.props.profile.tutorprofile.map((profile)=>{
    //         return(
    //             <li>
    //                 {profile.email}
    //             </li>
    //         )
    //     })
              
        
    //     return tutorprofilelist;
    // }
    // componentWillReceiveProps(nextProps){
    //     console.log('props component', nextProps.profile.tutorprofile);
    //     // var lenght = Object.keys(nextProps.profile.tutorprofile).length
    //     // console.log(lenght);
    // }


    render(){
        
        // console.log('tutorlist', this.props.profile.tutorprofile);
        // console.log('length', this.props.profile);
        // console.log('length props',Object.keys(this.props.profile.tutorprofile).length)
        var length = Object.keys(this.props.profile.tutorprofile).length
        if(length > 0){
            return(
            
                <div>
                  {/* {Object.keys(this.props.profile.tutorprofile).length} */}
                  <table class="table table-hover table-bordered">
                 <thead class="table table-hover table-bordered">
                      <tr>
                          <th>#</th>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Email</th>
                         <th>phone</th>
                         <th>Subjects</th>
                         <th>Timings</th>
                         <th>experience</th>
                         <th>rating</th>               
                     </tr>
                 </thead>
                 <tbody>
                 {this.renderlist()}
                 </tbody>
             </table>
                  
                </div>
            )
        }
        
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
            
        
        
    }
}

export default TutorProfileList;