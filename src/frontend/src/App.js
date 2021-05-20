import './App.scss';
import {TeamPage} from "./pages/TeamPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {MatchPage} from "./pages/MatchPage";
import {HomePage} from "./pages/HomePage";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={"/teams/:teamName/matches/:year"}>
                        <MatchPage/>
                        <Footer/>
                    </Route>
                    <Route path={"/teams/:teamName"}>
                        <TeamPage/>
                        <Footer/>
                    </Route>
                    <Route path={"/"}>
                       <HomePage/>
                       <Footer/>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
