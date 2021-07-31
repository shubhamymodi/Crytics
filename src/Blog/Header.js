import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SignOutButton from "../SignOutButton";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title, username } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button style={{fontWeight:'bold',textTransform:"none",fontSize:"14px"}} size="small">Hello {username}</Button>
        {/* <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography> */}
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Crytics
          </Typography>
        {/* <Button variant="outlined" size="small">
          Log out
        </Button> */}
        <SignOutButton/>
      </Toolbar>
      
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};