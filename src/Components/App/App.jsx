import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ROUTES from "../../configs/routes";

import ScrollToTop from "../ScrollToTop";
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
      <ScrollToTop isActive={isToTopBtnVisible} />
      <Switch>
        <Route path="/404" component={ErrorPage} />
        <Route>
          <Header />
          <main>
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
          </main>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
