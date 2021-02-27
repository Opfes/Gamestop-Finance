import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

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
    const {path,
    text} = props

    const handleClick = () => {
        console.log("it worked!")
    }

    return (
        <Button onClick={handleClick} className={classes.root}>{text}</Button>
    );
}

export default StyledButton;