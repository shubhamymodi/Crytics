import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import popcorn from "./popcorn.svg";
import Footer from "./Blog/Footer";
import Testimonials from "./Testimonials";
const useStyles = makeStyles((theme) => ({
  
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    textAlign:"center",
    marginBottom:'20px'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },  
  navbar:{
    marginRight:'3%',
    '&:hover':{
      color:"rgb(255,255,255,0.8)"
   }
    
  },
  wave:{
    
    transform: "rotate(180deg)",
    right: "0",
    top:"0",
    zIndex: "-100"
  }
}));



export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>         
          <Link className={classes.navbar} underline="none" href="/" variant="h6" color="inherit" noWrap>
            Home
          </Link>

          <Link className={classes.navbar} underline="none" href="/signin" variant="h6" color="inherit" noWrap>
            Login
          </Link>

          <Link className={classes.navbar} underline="none" href="/signup" variant="h6" color="inherit" noWrap>
            Signup
          </Link>


        </Toolbar>
      </AppBar>
      
      <main>
        {/* Hero unit */}
       
        <div className={classes.heroContent}>
        
          <Container maxWidth="sm">
            
            <img style={{width:"200px",height:"200px"}} src={popcorn} alt="popcorn_image"/>
            
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Crytics
            </Typography>
            <Typography style={{fontStyle:"italic",color:"#444"}} variant="h5" align="center" color="textSecondary" paragraph>
            Share your thoughts about movies and web series you binge
watched, in less than <span style={{fontWeight:"bold"}}>250</span> characters. Let's see your creativity!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button href="/signup" variant="contained" color="primary">
                    sign up
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="/signin" variant="outlined" color="primary">
                    sign in
                  </Button>
                </Grid>
              </Grid>
            </div>
            
          </Container>
        </div>
        <Testimonials/>
        <Footer/>
      </main>
      
    </React.Fragment>
  );
}