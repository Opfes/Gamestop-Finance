import React from 'react';
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
import {useStyles} from './providers/ThemeSetup';
import { VictoryPie } from 'victory';
import { auth } from './firebase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import SettingsIcon from '@material-ui/icons/Settings';
import { UserContext } from "./providers/UserProvider";
import {useContext} from 'react';

function Dashboard() {
  const classes = useStyles();
  const data=[
    { x: "Equity", y: 40},
    { x: "Bonds", y: 15},
    { x: "Savings", y: 10},
    { x: "401k", y: 30}
  ];
    
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  
    return (
      <html>
        <body>
          <header>
            <Grid container
            alignContent="space-between"
            alignItems="center"
            wrap='nowrap'
            justify='center'>
              <Grid item>
                <Tooltip title="Settings" arrow>
                  <Button> 
                    <SettingsIcon style={{ color: "white" }} fontSize='large'/>
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <img src={logo} className="mainLogo" alt="Gamestop Finance logo"></img>
              </Grid>
              <Grid item>
                <Tooltip title="Log Out" arrow>
                  <Button  onClick = {() => {auth.signOut()}}>
                    <ExitToAppIcon style={{ color: "white" }} fontSize='large'/>
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
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
                    <h1>{displayName}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <p>It seems like you're new around here.<br /> Click below to enter your financial information.</p>
                <Button className={classes.button}>
                  <Link to="/Onboard" style={{ textDecoration: 'none', color: 'white'}}>Input info</Link>
                </Button>
              </Paper>
            </Grid>
          </Grid>  
        </body>
      </html>
    );
  }

export default Dashboard