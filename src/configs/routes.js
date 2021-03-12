import Home from "../Pages/Home";
import ObjectsContainer from "../Containers/PageContainers/ObjectsContainer";
import FavouritesContainer from "../Containers/PageContainers/FavouritesContainer";
import BidsContainer from "../Containers/PageContainers/BidsContainer";
import ChosenObjectContainer from "../Containers/PageContainers/ChosenObjectContainer";

const ROUTES = [
	{
		name: "Главная",
		href: "/",
		isExact: true,
		isDynamic: false,
		component: Home,
	},
	{
		name: "Выбор квартир",
		href: "/objects",
		isExact: true,
		isDynamic: false,
		component: ObjectsContainer,
	},
	{
		name: "",
		href: "/objects/:id",
		isExact: true,
		isDynamic: true,
		component: ChosenObjectContainer,
	},
	{
		name: "Избранное",
		href: "/favoirites",
		isExact: false,
		isDynamic: false,
		component: FavouritesContainer,
	},
	{
		name: "Заявки",
		href: "/bids",
		isExact: false,
		isDynamic: false,
		component: BidsContainer,
	},
];

export default ROUTES;
