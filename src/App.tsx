import './styles/App.scss';
import { Main } from './views';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Switch>
          <Route exact path="/dashboard/wishlist">
            <></>
          </Route>
          <Route path="/main">
            <>
              <Main />
            </>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
