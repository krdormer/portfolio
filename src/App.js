// Styles
import './App.css';

// Components for routing 
import { Route, Switch } from 'react-router-dom';

// Components to be used by Route
import Header from './components/header/header.component';
import HomePage from './pages/home-page/home-page.component';
import AboutPage from './pages/about-page/about-page.component';
import ProjectsPage from './pages/projects-page/projects-page.component';

// NPM Components


const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path = '/about' component={AboutPage} />
        <Route path='/projects' component={ProjectsPage} />
      </Switch>
    </div>
  );
}

export default App;
