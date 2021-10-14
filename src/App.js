import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {/* <Route path="/emma" render={() => <Profile name="Emma" />} />
        <Route path="/victoria" render={() => <Profile name="Victoria" />} /> */}
        <Route
          path="/profile/:name"
          render={(routeProps) => <Profile {...routeProps} name="Victoria" />}
        />
        {/* The asterisk "catches" all the routes that didn't match with any pattern */}
        {/* <Route path="*" component={Profile} /> */}
      </Switch>
    </div>
  );
}

export default App;
