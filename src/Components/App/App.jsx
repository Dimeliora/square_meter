import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Logo from '../Logo';
import Footer from '../Footer';

import ObjectsContainer from '../../Pages/Objects/ObjectsContainer';
import ChosenObjectContainer from '../../Pages/ChosenObject/ChosenObjectContainer';
import FavouritesContainer from '../../Pages/Favourites/FavouritesContainer';
import Bids from '../../Pages/Bids';

import './App.css';

const App = () => {
  return (
    <div className="sticky-footer">
      <div className="content-wrapper">
        <Header />
        <Logo />
        <Switch>
          <Route exact path="/objects" component={ObjectsContainer} />
          <Route path="/objects/:id" component={ChosenObjectContainer} />
          <Route path="/favoirites" component={FavouritesContainer} />
          <Route path="/bids" component={Bids} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;