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
import { auth, generateUserDocument, firestore } from './firebase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import SettingsIcon from '@material-ui/icons/Settings';
import { UserContext } from "./providers/UserProvider";
import {useContext, useEffect, useState} from 'react';
import AddMenu from './AddMenu';
import UserDataLoad from './UserDataLoad';

function Dashboard() {
  const classes = useStyles();
  const dummyData=[
    { x: "Equity", y: 40},
    { x: "Bonds", y: 15},
    { x: "Savings", y: 10},
    { x: "401k", y: 30}
  ];
  const value401k = 400;
  const valuebonds = 400;
  const valueequity = 400;
  const valuesavings = 400;
  
  const user = useContext(UserContext);
  const {uid, photoURL, displayName, email} = user;
  
  const [dataDumpster, setdataDumpster] = useState();
  //LETS FREAKING GOOOOOOOOOOOOO
  useEffect(() =>
    firestore.collection("Users").doc(uid)
    .onSnapshot((doc) => { 
        setdataDumpster(doc.data());
      }),
  );

  useEffect(() =>{
    if((dataDumpster && dataDumpster.valuebonds) == null || (dataDumpster && dataDumpster.valuesavings) == null || (dataDumpster && dataDumpster.valueequity) == null) {
      generateUserDocument(user,  user.email , value401k, valuebonds, valueequity, valuesavings);
      }
    }
  )

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
                    data={dummyData}
                    width={600}
                    colorScale="red"
                    sortOrder="descending"
                    padAngle={5}
                    innerRadius={100}
                    />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <h1>{displayName}</h1>
                    <p>Welcome to your GameStop Finance homepage. View your personalized financial graph
                      or input new or updated information below. If you have not yet input any information, the graph
                      will display default statistics. Enjoy!
                    </p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <h2>Equity</h2>
                <h3>${dataDumpster && dataDumpster.valueequity}</h3>
                <p>Click below to enter your financial information.</p>
                <Button className={classes.button}>Update Info</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <h2>Bonds</h2>
                <h3>${dataDumpster && dataDumpster.valuebonds}</h3>
                <p>Click below to enter your financial information.</p>
                <Button className={classes.button}>Update Info</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <h2>Savings</h2>
                <h3>${dataDumpster && dataDumpster.valuesavings}</h3>
                <p>Click below to enter your financial information.</p>
                <Button className={classes.button}>Update Info</Button>
              </Paper>
            </Grid>
          </Grid>  
        </body>
      </html>
    );
  }

export default Dashboard