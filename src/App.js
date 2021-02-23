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
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { dark } from '@material-ui/core/styles/createPalette';



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
}));

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
  return (
    <ThemeProvider theme={theme}>
      <html>
        <body>
          <header>
            <img src={logo} className="mainLogo" alt="Gamestop Finance logo"></img>
          </header>
          <Grid 
            container
            spacing={0}
            direction='column'
            justify='center'
            alignItems='center'
            style={{ minHeight: '80vh' }}>
            <Grid item>
              <Paper className={classes.paper}>
                <Grid
                  container
                  direction='column'>
                  <Grid item>
                    <h1>GameStop<br /> Finance</h1>
                  </Grid>
                  <Grid item>
                    <form className={classes.root} noValidate autoComplete="off">
                      <Grid container direction='column'>
                        <Grid item>
                          <TextField className={classes.textfield} id="standard-basic" label="Username"/>
                        </Grid>
                        <Grid item>
                          <TextField className={classes.textfield} id="standard-basic" label="Password" />
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                  <Grid item>
                    <LoginReturnButton className={classes.dashboardButton} path="/dashboard" text="dashboard" />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>  
          </Grid>
        </body>
      </html>
    </ThemeProvider>
  );
}

export default App;
