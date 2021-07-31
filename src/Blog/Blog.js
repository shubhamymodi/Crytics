import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import MainFeaturedPost from './MainFeatured';
import FeaturedPost from './Featured';
import getFirebase from "../firebase";

import Footer from './Footer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./PostForm.css";
import loadingGIF from "../loadingGIF.gif";

import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import SignOutButton from "../SignOutButton";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
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
  }
 
}));


const mainFeaturedPost = {
  title: 'Avengers Endgame',
  description:
    "There really is very little that could be improved about Endgame. There's certainly no more that could be thrown at it.Films don't come any huger than this: the closing chapter to an 11-year saga in the Marvel Cinematic Universe.",
  image: 'https://res.cloudinary.com/shubhampersonal/image/upload/v1627133518/iron_man_b267h7.jpg',
  imgText: 'main image description',
  linkText: 'By Team Crytics',
};



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



export default function Blog() {
  const [user, setUser] = useState(null);
  const [title,setTitle] = useState("");
  const firebaseInstance = getFirebase();
  let [image,setImage] = React.useState(null);
  const [post,setPost] = React.useState("");
  const [link,setLink] = React.useState("");
  const [loaded,setLoaded] = React.useState(false);
  const [uploadImage, setUploadImage] = React.useState("");
  var [postArray,setPostArray] = React.useState([]);
  let [charactersRem,setCharactersRem] = React.useState(250);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {          
          setUser(authUser.email);
          
        } else {
          setUser(null);
          
        }
      });
    }
     
  },[]);
 
  useEffect(()=>{
    const firebase = getFirebase();
    const allPostRef = firebase.database().ref('Post');
    allPostRef.on('value', (snapshot)=>{
      let postValue = snapshot.val();      
      let postList = [];
      for (let id in postValue){
        postList.push({id,...postValue[id]});        
      }
      postList.reverse();      
      console.log(postList);
      setPostArray(postList);
      setLoaded(true);     
          
     
      
    })
  },[]);

  
  const classes = useStyles();
  

  


  
  const imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUploadImage(reader.result);
              
      }
    };
    reader.readAsDataURL(e.target.files[0]);

    if(e.target.files[0]){
        setImage(e.target.files[0]);
    }
    
  };
  
 const handleChange = (e)=>{
     setPost(e.target.value);
     setCharactersRem(250-e.target.value.length);
 }
 const handleTitle = (e)=>{
  setTitle(e.target.value);
}
 const createPost = () => {
  var d = new Date();
  var m = d.getMonth();
  var date = d.getDate();
  var month = ['January','February','March','April','May','June','July','August','September','October','November','December']
  var dateofPost = month[m] +" "+ date;

  const uploadTask = firebaseInstance.storage().ref(`images/${image.name}`).put(image);
  uploadTask.on(
      "state_changed",
      snapshot => {},
      error =>{
          console.log(error);
      },
      () => {
          firebaseInstance.storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {           
              
              setLink(url);
              const postRef = firebaseInstance.database().ref('Post');
                const postInfo ={
                    title,
                    post,
                    url,
                    dateofPost,
                    user
                }
         
              postRef.push(postInfo);
             
          })

      }
  )
  setOpen(true);
  setPost("");
  setTitle("");
  setUploadImage("");
  setImage(null);

}
      

 if(loaded){
  return  (
    
    <React.Fragment>
      <CssBaseline />

      <AppBar position="sticky">
        <Toolbar>
          <Typography className={classes.navbar} underline="none" variant="h6" color="inherit" noWrap>
            Hello {user}
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
      <Container maxWidth="lg">
        {/* <Header username={user} title="Blog"  /> */}
        


        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"bold"}}>Write a post! </Typography>
        </AccordionSummary>
        <AccordionDetails style={{width:"100%"}}>

        {/* Post Form------------------------------------------------------------------ */}
        <form >
        <TextField required id="outlined-basic" label="Title" onChange={handleTitle} variant="outlined" value={title}/>
        <br/>
        <TextField
          id="outlined-full-width"
          label="Review"          
          multiline
          required
          placeholder="Write your experience..."          
          fullWidth
          margin="normal"
          inputProps={{
            maxLength:250
          }}         
          className="postArea"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
          value={post}
        />
        <div style={{textAlign:"right",marginRight:"240px",color:charactersRem<=25?"red":"black",fontWeight:"bold"}}>{charactersRem} characters remaining</div>
        <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            required
            onChange={imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">            
              Choose your Photo
            </label>
          </div>
          <div className="img-holder">
            <img src={uploadImage || "http://via.placeholder.com/200x200"} alt="" id="img" className="img" />
          </div>

          <Button onClick={createPost} variant="contained" color="primary">
            Post
          </Button>


        
      </form>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Successfully Posted!
        </Alert>
      </Snackbar>
        {/* Post Form Ends----------------------------------------------------------------- */}
        {/* <Form /> */}
        </AccordionDetails>
      </Accordion>

        <main>
          <MainFeaturedPost mainPost={mainFeaturedPost} />
          <Grid container spacing={4}>
            {/* {featuredPosts.map((element) => (
              <FeaturedPost key={element.title} posts={element} />
            ))} */}
            {postArray.map((element) => (
              <FeaturedPost deletePost="false" key={element.title} posts={element} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
 }else{
  return <div className={classes.loading}>

  {/* <CircularProgress/> */}
  <img src={loadingGIF} alt="Loading"/>
  </div>
 }
  

}