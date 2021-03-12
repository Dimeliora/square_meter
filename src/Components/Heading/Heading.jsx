import cn from "classnames";
import PropTypes from "prop-types";

import "./Heading.scss";

const Heading = ({ children, classname }) => {
	return <h2 className={cn("heading", classname)}>{children}</h2>;
};

Heading.propTypes = {
	classname: PropTypes.string,
};

Heading.defaultProps = {
	classname: "",
};

export default Heading;
