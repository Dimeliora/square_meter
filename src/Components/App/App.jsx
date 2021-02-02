import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Logo from '../Logo';
import Footer from '../Footer';

import Home from '../../Pages/Home';
import ObjectsContainer from '../../Containers/PageContainers/ObjectsContainer';
import ChosenObjectContainer from '../../Containers/PageContainers/ChosenObjectContainer';
import FavouritesContainer from '../../Containers/PageContainers/FavouritesContainer';
import Bids from '../../Pages/Bids';

import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Logo />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/objects" component={ObjectsContainer} />
        <Route path="/objects/:id" component={ChosenObjectContainer} />
        <Route path="/favoirites" component={FavouritesContainer} />
        <Route path="/bids" component={Bids} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
