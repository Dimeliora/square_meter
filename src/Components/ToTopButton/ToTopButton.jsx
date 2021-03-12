import { ReactComponent as ArrowUp } from "./assets/up-arrow.svg";

import "./ToTopButton.scss";

const ToTopButton = () => {
  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="to-top-button" onClick={handleButtonClick}>
      <ArrowUp />
    </div>
  );
};

export default ToTopButton;
