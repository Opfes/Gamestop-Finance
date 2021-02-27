import React, {useRef, useState} from 'react';
import logo from './1280px-GameStop.png';
import Sheet from './Sheet.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LoginReturnButton from './LoginReturnButton.js'
import StyledButton from './styledButton.js';
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app';
import 'firebase/auth';

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
}));

var firebaseConfig = {
  apiKey: "AIzaSyBVyweb4QBraCJI5D8dHwqKeRKtWJXBUQY",
  authDomain: "gamestopfinance.firebaseapp.com",
  projectId: "gamestopfinance",
  storageBucket: "gamestopfinance.appspot.com",
  messagingSenderId: "1074133483110",
  appId: "1:1074133483110:web:99ecca6e20d461794e77a7",
  measurementId: "G-P80RG0KSJF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <html>
      <body>
        <header>
          <img src={logo} className="mainLogo" alt="Gamestop Finance logo"></img>
        </header>
        <div className="container">
          <Sheet sheetType="dashboard"/>
        </div>  
      </body>
    </html>
  );
}

function Login() {
  const classes = useStyles();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };


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
                        <Grid item>
                          <TextField className={classes.textfield} value={email} onChange={handleEmailChange} label="Email"/>
                        </Grid>
                        <Grid item>
                          <TextField className={classes.textfield} value={password} onChange={handlePasswordChange} label="Password" />
                        </Grid>
                        <Grid item>
                          <StyledButton className={classes.dashboardButton} text="Log In" />
                        </Grid>
                        <Grid item>
                          <StyledButton type='signup' emailref={email} passwordref={password} className={classes.dashboardButton} text="Sign Up" />
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



export default App;
