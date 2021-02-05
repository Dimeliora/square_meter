import axios from "axios";

const Axios = axios.create({
	baseURL: "http://jsproject.webcademy.ru",
});

const ejectData = (response) => response.data;

Axios.interceptors.response.use(ejectData);

export default Axios;
