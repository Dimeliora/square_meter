import cn from "classnames";

import "./Heading.css";

const Heading = ({ children, classname = "" }) => {
  return <h2 className={cn("heading-1", classname)}>{children}</h2>;
};

export default Heading;
