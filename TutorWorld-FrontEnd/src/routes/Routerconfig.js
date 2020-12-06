import React from 'react';
import {Route} from 'react-router-dom';
import TutorRegister from '../components/TutorRegister';
import Getalltutors from '../components/Getalltutors'
import ParentRegistration from '../components/ParentRegister';
import Logout from '../components/Logout';
import ParentLogin from '../components/ParentLogin';
import Home from '../components/Home'
import TutorLogin from '../components/TutorLogin';
import TutorProfile from '../components/TutorProfile';
import Payment from '../components/payment';

class Routerconfig extends React.Component{
    render(){
        return(
            <div>
                <Route path="/TutorRegister" component={TutorRegister}></Route>
                <Route path="/Getalltutors" component={Getalltutors}></Route>
                <Route path="/ParentRegister" component={ParentRegistration}></Route>
                <Route path="/ParentLogin" component={ParentLogin}></Route>
                <Route path="/Logout" component={Logout}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/TutorLogin" component={TutorLogin}></Route>
                <Route path="/TutorProfile" component={TutorProfile}></Route>
                <Route path="/Payment" component={Payment}></Route>

            </div>
            

        )
    }
}

export default Routerconfig;