import { useHistory } from "react-router-dom";

import "./ErrorPage.css";

const ErrorPage = () => {
  const history = useHistory();

  const handleBackBtnClick = () => {
    history.push("/");
  };

  return (
    <div className="error-page">
      <h1 className="error-page__heading">404</h1>
      <h2 className="error-page__subheading">
        К сожалению, такой страницы не существует
      </h2>
      <button className="error-page__button" onClick={handleBackBtnClick}>
        Вернуться на главную страницу
      </button>
    </div>
  );
};

export default ErrorPage;
