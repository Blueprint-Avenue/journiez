import "./hotel.css";
import {Navbar} from "../../components/navbar/Navbar";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {MailList} from "../../components/mailList/MailList";

export const Hotel = () => {
	return (
		<div>
			<Navbar />
			<Header type="list" />

			<MailList />
			<Footer />
		</div>
	);
};
