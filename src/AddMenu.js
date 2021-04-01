import React, {useState} from 'react';
import logo from './1280px-GameStop.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import {useStyles} from './providers/ThemeSetup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app';
import 'firebase/auth';
import { signInWithGoogle } from './firebase';

const theme =createMuiTheme({
  palette: {
    primary: {
      main: '#a50f15',
    },
    type: 'dark',
  },
});

//This will be a menu overlay that is modular for each type of data
//It will sit on top of the page and allow the user to add data without
//navigating away from the page.

function AddMenu() {
    let history = useHistory();
    const classes = useStyles();
    
  
    const HandleClick = () => {
      signInWithGoogle();
    }
  
    
    return (
    <Paper className={classes.wrappingPaperNotVisible}>
        {/* This is gonna be so slick, lololol */}
      <Paper className={classes.overlayMenu}>
        <Grid container
            direction='column'
            wrap='wrap'
            justify='space-evenly'
            alignItems="center"
            spacing='2'
        >
            <Grid item><TextField variant='outlined' className={classes.dataInputField} label="Value" value={userinput_val} name="userinputval" onChange = {(event) => onChangeHandler(event)}/></ Grid>
        </Grid>
      </Paper>
    </Paper>
    );
  }

export default AddMenu