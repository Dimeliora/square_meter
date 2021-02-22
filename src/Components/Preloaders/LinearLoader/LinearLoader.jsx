import cn from "classnames";
import PropTypes from "prop-types";

import "./LinearLoader.css";

const LinearLoader = ({ classname }) => {
  return (
    <div className={cn("lds-ellipsis", classname)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

LinearLoader.propTypes = {
  classname: PropTypes.string,
};

LinearLoader.defaultProps = {
  classname: "",
};

export default LinearLoader;
