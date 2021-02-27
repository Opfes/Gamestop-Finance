import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase/app';
import 'firebase/auth';

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #a50f15 25%, #fb6a4a 75%)',
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
}));

const StyledButton = (props) => {
    const classes = useStyles();
    const {type,
    emailref,
    passwordref,    
    text} = props
    
    //todo figure out why the function is being run without click
    if(type==="signup"){
        const OnSignUpClick = () => {
            const email = emailref
            const password = passwordref
            console.log(email)
            console.log(password)
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // Signed in 
              var user = userCredential.user;
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              // ..
            });
        }
    
        return (
            <Button onClick={OnSignUpClick} className={classes.root}>{text}</Button>
        );
    }
    else{
        return (
            <Button className={classes.root}>{text}</Button>
        );
    }

}

export default StyledButton;