import {getUserDocument} from './firebase';
import { UserContext } from "./providers/UserProvider";
import {useContext} from 'react';

function UserDataLoad(props){
    const dataDumpster = getUserDocument(props.user);
    window.alert(dataDumpster.uid);
}

export default UserDataLoad;