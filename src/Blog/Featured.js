import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import getFirebase from "../firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
  card: {
    display: 'flex',
    cursor:'default'
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { posts } = props;

 const deletePost = ()=>{
  setOpen(false);
   const postRef = getFirebase().database().ref('Post').child(posts.id);
   postRef.remove();
 }
 const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>            
              <Typography component="h2" variant="h5">
                {posts.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {posts.dateofPost}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {posts.post}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                By {posts.user}
              </Typography>

              {props.deletePost==="true"?<> <br/>    
              <div onClick={handleClickOpen} style={{cursor:"pointer"}}>
              <DeleteForeverIcon style={{color:"red",marginBottom:"2px"}} />
              <span style={{color:"red"}}> Delete Post</span>
              </div></>:null}
              
{/* ---------------------------Dialog Box Starts for Deleting----------------------------------------------------------- */}
              <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to remove this post from the blog?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By deleting, it will be permanently removed from the database and not be visible to you or others in future.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deletePost} color="primary" autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>

{/* ----------------------------------Dialog Box Ends---------------------------------------------------------- */}
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={posts.url} title={posts.title} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};