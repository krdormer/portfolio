import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/home-page/home-page.component';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './pages/about-page/about-page.component';
import ProjectsPage from './pages/projects-page/projects-page.component';

function App() {
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
