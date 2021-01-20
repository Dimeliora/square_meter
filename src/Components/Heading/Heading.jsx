import cn from "classnames";

import "./Heading.css";

const Heading = ({ children = null, classname = "" }) => {
  return <h1 className={cn("heading-1", classname)}>{children}</h1>;
};

export default Heading;
