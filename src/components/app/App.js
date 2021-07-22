// Components for routing
import { Route, Switch } from 'react-router-dom';
// For overall app styling
import { AppStyles } from './App.styles';

// Components to be used by Route
import Header from '../header/header.component';
import HomePage from '../../pages/home-page/home-page.component';
import AboutPage from '../../pages/about-page/about-page.component';
import ProjectsPage from '../../pages/projects-page/projects-page.component';
import TechPage from '../../pages/tech-page/tech-page.component';
import ContactPage from '../../pages/contact-page/contact-page.component';

// NPM Components

const App = () => {
  return (
    <AppStyles>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/tech" component={TechPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </AppStyles>
  );
};

export default App;
