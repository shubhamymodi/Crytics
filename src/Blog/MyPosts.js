import React, { useState, useEffect } from "react";
import FeaturedPost from './Featured';
import getFirebase from "../firebase";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import SignOutButton from "../SignOutButton";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import popcornPost from "../popcorn-post.svg";

import loadingGIF from "../loadingGIF.gif";
const useStyles = makeStyles((theme) => ({
 
  navbar:{
    marginRight:'3%',
    '&:hover':{
       color:"rgb(255,255,255,0.8)"
    }
    
  },
  loading:{
    position: "absolute",
    left: "50%",
    top: "50%",
    webkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)"
  },
  main:{
      minHeight:"calc(100vh-245.75px)"
  },
  
 
}));

export default function MyPosts(props){
    
    const [myPosts,setMyPosts] = useState([]);
    let [loaded,setLoaded] = useState(false);
    const classes = useStyles();
      
      useEffect(()=>{
        const firebase = getFirebase();
        const allPostRef = firebase.database().ref('Post');
        allPostRef.on('value', (snapshot)=>{
          let postValue = snapshot.val();      
          let postList = [];
          for (let id in postValue){   
              if(postValue[id].user === props.user) postList.push({id,...postValue[id]});          
                
          }
          postList.reverse();      
          
          setMyPosts(postList);   
          setLoaded(true);
         
          
        })
      },[props.user]);

     if(loaded){
        return (
        
            <div style={{overflow:"hidden",backgroundColor:"#fafafa", display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',}}>
            <CssBaseline/>
            <AppBar position="sticky">
            <Toolbar>
              <Typography className={classes.navbar} underline="none" variant="h6" color="inherit" noWrap>
                Hello {props.user}
              </Typography>
                     
              <Link className={classes.navbar} underline="none" href="/" variant="h6" color="inherit" noWrap>
                Home
              </Link>

              <Link className={classes.navbar} underline="none" href="/blog" variant="h6" color="inherit" noWrap>
                Dashboard
              </Link>
    
    
              <Link className={classes.navbar} underline="none" href="/my-posts" variant="h6" color="inherit" noWrap>
                My Posts
              </Link>
    
              <SignOutButton/>
              
    
            </Toolbar>
          </AppBar>
          
            <h1 style={{textAlign:"center",marginTop:"20px",marginBottom:"20px"}}><img src={popcornPost} alt="logo" style={{width:"50px",height:"50px"}} />My Posts</h1>
            <Grid container spacing={4}>
            {myPosts.map((element) => (
                
                  <FeaturedPost deletePost="true" key={element.title} posts={element} />              
                
                ))}
            </Grid>
        
            <Footer/>
            </div>
            
            
        )


     }else{
         return <div className={classes.loading}>

         {/* <CircularProgress/> */}
         <img src={loadingGIF} alt="Loading"/>
         </div>
     }
    
        
}