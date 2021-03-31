import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
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
import { FormControl } from '@material-ui/core';

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
        {/* I saw it, pog -nick wuz here lol */}
    }

    const dropdownOptions = ['401k', 'Equity', 'Bonds', 'Savings']
    
    const [userinput_val, setuserinput_val] = useState('');
    const [dropdown_select, setdropdown_select] = useState('');
    const [error, setError] = useState(null);

    const userDocumentName = displayName.replace(/ /g, '')

    const  inputFinancesHandler =
        (event, dropdown_select, userinput_val) => {
            event.preventDefault();
            /* TODO modify function here, and make more targeted functions in firebase file */
            generateUserDocument(user, dropdown_select, userinput_val)
        }

    const onChangeHandler = (event) => {
        const {name, id, value} = event.currentTarget;

        if(id == 'userinputval'){
            setuserinput_val(value);
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
                                        <Grid item>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                                            <Select
                                            native
                                            value={dropdown_select}
                                            onChange={(event) => onChangeHandler(event)}
                                            label="Age"
                                            id="userinputval"
                                            inputProps={{
                                                name: 'age',
                                                id: 'outlined-age-native-simple',
                                            }}
                                            >
                                            <option aria-label="None" value="" />
                                            <option value={10}>401k</option>
                                            <option value={20}>Equity</option>
                                            <option value={30}>Bonds</option>
                                            <option value={40}>Savings</option>
                                            </Select>
                                        </FormControl>
                                        </Grid>
                                        <Grid item><TextField variant='outlined' className={classes.dataInputField} label="Value" value={userinput_val} name="userinputval" onChange = {(event) => onChangeHandler(event)}/></Grid>
                                        <Grid item><Button className={classes.button} onClick={(event) => {inputFinancesHandler(event, dropdown_select, userinput_val)}}>Submit</Button></Grid>
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