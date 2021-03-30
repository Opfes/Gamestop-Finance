import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { UserContext } from "./providers/UserProvider";
import {useContext, useState} from 'react';
import { auth } from './firebase';
import { useHistory } from "react-router-dom";
import {useStyles} from './providers/ThemeSetup';
import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import {generateUserDocument} from './firebase.js';
import logo from './1280px-GameStop.png';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const theme =createMuiTheme({
    palette: {
      primary: {
        main: '#a50f15',
      },
      type: 'dark',
    },
  });


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


    
    const [val_401k, setVal_401k] = useState('');
    const [val_bonds, setVal_bonds] = useState('');
    const [val_savings, setVal_savings] = useState('');
    const [val_equity, setVal_equity] = useState('');
    const [dropdown_select, setdropdown_select] = useState('');
    const [error, setError] = useState(null);

    const userDocumentName = displayName.replace(/ /g, '')

    const  inputFinancesHandler =
        (event, val_401k, val_bonds, val_savings, val_equity) => {
            event.preventDefault();
            generateUserDocument(user, val_401k, val_bonds, val_savings, val_equity)
        }

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name == 'val401k'){
            setVal_401k(value);
        }
        else if(name == 'valbonds'){
            setVal_bonds(value);
        }
        else if(name == 'valsavings'){
            setVal_savings(value);
        }
        else if(name == 'valequity'){
            setVal_equity(value);
        }
        else if(name == 'dropdownSelectorVal'){
            setdropdown_select(value);
        }
    }
    
    
    return (
        <html>
            <ThemeProvider theme={theme}>
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
                        direction='column'
                        justify='center'
                        alignItems='center'
                        style={{ minHeight: '80vh' }}>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <form>
                                    <Grid container
                                    direction='column'
                                    wrap='wrap'
                                    justify='space-evenly'
                                    alignItems="center"
                                    spacing='2'
                                    >
                                        <Grid item><Select variant='outlined' className={classes.dropdownTypeSelect} label="Type of Financial Data" value={dropdown_select} name="dropdownSelectorVal">
                                            
                                        </ Select></Grid>
                                        <Grid item><TextField variant='outlined' className={classes.dataInputField} label="401k Value" value={val_401k} name="val401k" onChange = {(event) => onChangeHandler(event)} /></Grid>
                                        <Grid item><TextField variant='outlined' className={classes.dataInputField} label="Bonds Value" value={val_bonds} name="valbonds" onChange = {(event) => onChangeHandler(event)}/></Grid>
                                        <Grid item><TextField variant='outlined' className={classes.dataInputField} label="Savings Value" value={val_savings} name="valsavings" onChange = {(event) => onChangeHandler(event)}/></Grid>
                                        <Grid item><TextField variant='outlined' className={classes.dataInputField} label="Equity Value" value={val_equity} name="valequity" onChange = {(event) => onChangeHandler(event)}/></Grid>
                                        <Grid item><Button className={classes.button} onClick={(event) => {inputFinancesHandler(event, val_401k, val_bonds, val_savings, val_equity, val_equity)}}>Submit</Button></Grid>
                                    </ Grid>    
                                </form>
                            </Paper>
                        </Grid>
                    </Grid> 
                </body>
            </ThemeProvider>
        </html>
    )
}

export default Onboard