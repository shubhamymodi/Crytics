import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import getFirebase from "./firebase";

const useStyles = makeStyles((theme) => ({
  
 logout:{
  color: "white",
  borderColor: "white", 
  position: "absolute", 
  right: "20px", 
  bottom: "15px "
 },
}));

const SignOutButton = () => {
  const firebaseInstance = getFirebase();
  const classes = useStyles();
  const signOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();        
        window.location.href="/";
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      
     
      <Button className={classes.logout} onClick={() => signOut()} variant="outlined" size="small">
          Log out
        </Button>
    </div>
  );
};

export default SignOutButton;