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



function Login() {
    let history = useHistory();
    const classes = useStyles();
    
  
    const HandleClick = () => {
      signInWithGoogle();
    }
  
    
    return (
      <Paper>

      </Paper>
    );
  }

export default AddMenu