import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './pages/about-page/about-page.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path = '/about' component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
