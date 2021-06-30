import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;
