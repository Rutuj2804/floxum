import React from 'react';

import Signup2 from './Signup/Signup2';
import Login from './Login/Login';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Event from './Event/Event';
import Aboutevent from './Aboutevent/Aboutevent';
import Eventreg from './Eventreg/Eventreg';
import Explore from './Explore/Explore'
import Userprofile from './Userprofile/Userprofile'
import { BrowserRouter as Router ,Switch ,Route} from 'react-router-dom';
import GroupDetailView from './Groups/GroupDetailView';
const Main = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Signup" component={Signup2} />
                    <Route exact path="/Profile" component={Profile} />
                    <Route exact path="/Event" component={Event} />
                    <Route exact path="/Aboutevent" component={Aboutevent} />
                    <Route exact path="/Eventreg" component={Eventreg} />
                    <Route exact path="/Explore" component={Explore} />
                    <Route exact path="/Userprofile" component={Userprofile} />
                    <Route exact path="/group/:id" component={GroupDetailView} />
                </Switch>
            </Router>
        </>
    );
}


export default Main;
