import React, { useState, useEffect } from "react";
import getFirebase from "./firebase";
import SignUp from "./Signup";
import SignIn from "./Signin";
import Blog from "./Blog/Blog";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import MyPosts from "./Blog/MyPosts";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
   
  }, []);

  return (
    <div className="App">

   
      
      <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        {currentUser ? <Route path="/blog" exact component={Blog} />: null}
        <Route path="/my-posts" exact component={() => <MyPosts user={currentUser} />}/>
        {/* <SignIn/> */}
        
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
