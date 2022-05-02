import "./home.css";
import {Navbar} from "../../components/navbar/Navbar";
import {Header} from "../../components/header/Header";
import {Featured} from "../../components/featured/Featured";
import {PropertyList} from "../../components/propertyList/PropertyList";

export const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="home__Container">
				<Featured />
				<h1 className="home__Title">Browse by property type</h1>
				<PropertyList />
				<h1 className="home__Title">Homes guests love</h1>
			</div>
		</div>
	);
};
