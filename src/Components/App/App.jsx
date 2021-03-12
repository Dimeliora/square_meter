import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ROUTES from "../../configs/routes";

import ToTopButton from "../ToTopButton";
import Header from "../Header";
import Footer from "../Footer";
import ErrorPage from "../../Pages/ErrorPage";

import "./App.scss";

const App = () => {
  const [isToTopBtnVisible, setToTopBtnVisible] = useState(false);

  useEffect(() => {
    const handlePageScroll = () => {
      if (window.pageYOffset > 500) {
        setToTopBtnVisible(true);
      } else {
        setToTopBtnVisible(false);
      }
    };

    window.addEventListener("scroll", handlePageScroll);

    return () => {
      window.removeEventListener("scroll", handlePageScroll);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Switch>
        <Route path="/404" component={ErrorPage} />
        <Route>
          <Header />
          <Switch>
            {ROUTES.map(({ name, href, component, isExact }) => (
              <Route
                key={name}
                exact={isExact}
                path={href}
                component={component}
              />
            ))}
            <Route render={() => <Redirect to="404" />} />
          </Switch>
          <Footer />
        </Route>
      </Switch>
      {isToTopBtnVisible && <ToTopButton />}
    </div>
  );
};

export default App;
