import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "rgb(37, 37, 37)",
    color: "rgb(255, 255, 255)",  
    marginTop:"auto",    
    padding: theme.spacing(6, 0),
    // position: "absolute",
    // bottom: "0",
    // width: "100%"
    

  },
}));

export default function Footer() {
  const classes = useStyles();
  

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
      <div style={{marginLeft:'auto',marginRight:'auto',textAlign:"center",marginBottom:"10px"}}>
      <a href="https://www.linkedin.com/in/shubham-modi5/">
        <LinkedInIcon style={{color:"#fff", width:"45px", height:"45px",margin:"auto"}}/>
        </a>
        <a href="https://github.com/shubhamymodi">
        <GitHubIcon style={{color:"#fff", width:"45px", height:"45px",marginRight:"30px",marginLeft:"30px"}}/>
        </a>
        <a href="mailto:shubhamymodi@gmail.com">
        <MailIcon style={{color:"#fff", width:"45px", height:"45px"}}/>
        </a>
        </div>
        <Typography style={{fontSize:"17px"}} align="center" gutterBottom>
        Copyright © 2021. Developed with ❤️ by Shubham Modi!
        </Typography>
        
      </Container>
    </footer>
  );
}

