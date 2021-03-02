import React, {useRef, useState} from 'react';
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
import { VictoryPie } from 'victory';

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
  const classes = useStyles();
  const data=[
    { x: "Equity", y: 40},
    { x: "Bonds", y: 15},
    { x: "Savings", y: 10},
    { x: "401k", y: 30}
  ];

  return (
    <html>
      <body>
        <header>
          <img src={logo} className="mainLogo" alt="Gamestop Finance logo"></img>
        </header>
        <Grid container
        wrap='wrap'
        alignContent='center'
        justify='center'
        className={classes.dashboardGrid}>
          <Grid item>
            <Paper className={classes.paper}>
              <Grid container
              wrap='wrap'
              justify='space-evenly'
              alignItems="center"
              >
                <Grid item xs={12} sm={4}>
                  <VictoryPie
                  style={{
                    labels: {
                      fill: "white",
                      font: "wingdings"
                    }
                  }}
                  data={data}
                  width={600}
                  colorScale="red"
                  sortOrder="descending"
                  padAngle={5}
                  innerRadius={100}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <h1>Header</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>  
      </body>
    </html>
  );
}

function Login() {
  let history = useHistory();
  const classes = useStyles();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const OnSignUpClick = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      history.push("/dashboard");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }

  const Login = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      history.push("/dashboard");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
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
                        <Grid item>
                          <TextField className={classes.textfield} value={email} onChange={handleEmailChange} label="Email"/>
                        </Grid>
                        <Grid item>
                          <TextField className={classes.textfield} value={password} onChange={handlePasswordChange} type="password" label="Password" />
                        </Grid>
                        <Grid item>
                          <Button onClick={Login} className={classes.button}>Log in</Button>
                        </Grid>
                        <Grid item>
                          <Button onClick={OnSignUpClick} className={classes.button}>Sign up</Button>
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
