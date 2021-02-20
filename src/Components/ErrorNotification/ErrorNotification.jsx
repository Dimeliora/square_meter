import { useHistory } from "react-router-dom";

import "./ErrorNotification.css";

const ErrorNotification = () => {
  const history = useHistory();

  const handleBackBtnClick = () => {
    history.push("/");
  };

  return (
    <div className="error-notification">
      <h2 className="error-notification__heading">Ошибка</h2>
      <h3 className="error-notification__subheading">
        Во время выполнения вашего запроса возникла ошибка. Приносим свои
        извинения
      </h3>
      <button
        className="error-notification__button"
        onClick={handleBackBtnClick}
      >
        Вернуться на главную страницу
      </button>
    </div>
  );
};

export default ErrorNotification;
