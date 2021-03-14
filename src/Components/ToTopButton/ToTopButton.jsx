import cn from "classnames";
import PropTypes from "prop-types";

import { ReactComponent as ArrowUp } from "./assets/up-arrow.svg";

import "./ToTopButton.scss";

const ToTopButton = ({ isActive }) => {
  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={cn("to-top-button", { "to-top-button--active": isActive })}
      onClick={handleButtonClick}
    >
      <ArrowUp />
    </div>
  );
};

ToTopButton.propTypes = {
  isActive: PropTypes.bool,
};

ToTopButton.defaultProps = {
  isActive: false,
};

export default ToTopButton;
