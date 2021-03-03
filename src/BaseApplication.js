import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
import {useContext} from 'react';
import UserProvider from "./providers/UserProvider";
import { UserContext } from "./providers/UserProvider";

function BaseApplication() {
    const user = useContext(UserContext);

  return (
        user ?
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router> 
        
      :
    <Router>
        <div>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
            </Switch>
        </div>
    </Router>    

  );
}
export default BaseApplication;