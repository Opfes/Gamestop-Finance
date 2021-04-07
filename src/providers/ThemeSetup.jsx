import {makeStyles} from '@material-ui/core/styles';
import { PlayCircleFilledWhite } from '@material-ui/icons';

export const useStyles = makeStyles((theme) => ({
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
        margin: '15px',
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
    dataInputField: {
        color: 'white',
        margin: '10px',
    },
    dropdownTypeSelect: {
        color: 'white',
        margin: '10px',
        width: '500px',
    },
    wrappingPaperVisible:{
        width:'99.4vw',
        height: '99vh',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    overlayMenu: {
        background: 'white',
        position: 'absolute',
        zIndex: 1,
        left: '40%',
        top: '40%',
        width: '20%',
        height: '7%',
    },
}));

