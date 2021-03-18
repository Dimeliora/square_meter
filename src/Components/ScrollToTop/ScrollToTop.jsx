import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";

import { ReactComponent as ArrowUp } from "./assets/up-arrow.svg";

import "./ScrollToTop.scss";

const ScrollToTop = ({ isActive }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    handleScrollToTop();
  }, [pathname]);

  const handleScrollToTop = (e) => {
    const behavior = e ? "smooth" : "auto";
    window.scroll({ top: 0, left: 0, behavior });
  };

  return (
    <div
      className={cn("to-top-button", { "to-top-button--active": isActive })}
      onClick={handleScrollToTop}
    >
      <ArrowUp />
    </div>
  );
};

ScrollToTop.propTypes = {
  isActive: PropTypes.bool,
};

ScrollToTop.defaultProps = {
  isActive: false,
};

export default ScrollToTop;
