import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { UserContext } from "./providers/UserProvider";
import {useContext} from 'react';
import { auth } from './firebase';
import { useHistory } from "react-router-dom";
import {useStyles} from './providers/ThemeSetup';
import logo from './1280px-GameStop.png';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Onboard(){
    let history = useHistory();
    const user = useContext(UserContext);
    const {photoURL, displayName, email} = user;
    const classes = useStyles();

    function LogoutHandleClick() {
        auth.signOut();
        history.push('/');
        {/*If anyone finds this comment, I was so proud of this function working, I put my hands in the air when it worked*/}
    }


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
                                <Button  onClick = {LogoutHandleClick}>
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
                            
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid> 
            </body>
        </html>
    )
}

export default Onboard