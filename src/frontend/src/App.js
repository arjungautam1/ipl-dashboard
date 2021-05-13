import './App.scss';
import {TeamPage} from "./pages/TeamPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {MatchPage} from "./pages/MatchPage";


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={"/teams/:teamName/matches/:year"}>
                        <MatchPage/>
                    </Route>
                    <Route path={"/teams/:teamName"}>
                        <TeamPage/>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
