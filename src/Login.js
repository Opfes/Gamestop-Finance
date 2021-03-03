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


const useStyles = makeStyles((theme) => ({
  root: {
    padding:'25px',
    color: 'white',
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
      padding: '10px',
    },
  },
  paper: {
    background: 'rgba(0,0,0,0.7)',
    padding: '15px',
    color: 'white',
    position: 'relative',
  },
  forms: {
    width: '100%',
  },
  button: {
    background: 'linear-gradient(45deg, #a50f15 25%, #fb6a4a 75%)',
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
  },
  dashboardGrid: {
    padding: '25px',
  },
}));



function Login() {
    let history = useHistory();
    const classes = useStyles();
    
  
    const HandleClick = () => {
      signInWithGoogle();
    }
  
    
    return (
      <html>
        <ThemeProvider theme={theme}>
          <body>
            <header>
              <img src={logo} className="mainLogo" alt="Gamestop Finance logo"></img>
            </header>
            <Grid 
              container
              direction='column'
              justify='center'
              alignItems='center'
              style={{ minHeight: '80vh' }}>
              <Grid item>
                <Paper className={classes.paper}>
                  <Grid
                    container
                    direction='row'
                    wrap='wrap'
                    alignItems='center'
                    >
                    <Grid item xs={12}>
                      <h1>GameStop<br /> Finance</h1>
                    </Grid>
                    <Grid item xs={12}>
                      <form className={classes.form} noValidate autoComplete="off">
                        <Grid container justify='center' direction='column' spacing={2}>
                          {/*<Grid item>
                            <TextField className={classes.textfield} value={email} onChange={handleEmailChange} label="Email"/>
                          </Grid>
                          <Grid item>
                            <TextField className={classes.textfield} value={password} onChange={handlePasswordChange} type="password" label="Password" />
                          </Grid>
                          <Grid item>
                            <Button onClick={Login} className={classes.button}>Log in</Button>
                          </Grid>*/}
                          <Grid item>
                            <Button onClick={HandleClick} className={classes.button}>Sign in With Google</Button>
                          </Grid>
                        </Grid>
                      </form>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>  
            </Grid>
          </body>
        </ThemeProvider>
      </html>
    );
  }

export default Login