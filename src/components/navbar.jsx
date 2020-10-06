import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import aimnetIcon from "./../assets/ico-icon.ico";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "-8px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <img src={aimnetIcon} alt='' className='nav-icon' />
          </IconButton>
          <Typography variant='h4' className={classes.title}>
            AIMNet
          </Typography>
          <Link to='/login'>
            <Button color='primary'>Login</Button>
          </Link>
          <Link to='/signup'>
            <Button color='primary'>Signup</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
