import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../Header';
import Logo from '../Logo';
import Footer from '../Footer';
import Objects from '../../Pages/Objects';
import Favs from '../../Pages/Favs';
import Bids from '../../Pages/Bids';

const App = () => {
  return (
    <div className="sticky-footer">
      <div className="content-wrapper">
        <Header />
        <Logo />
        <Switch>
          <Route exact path="/" component={Objects} />
          <Route path="/favs" component={Favs} />
          <Route path="/bids" component={Bids} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
