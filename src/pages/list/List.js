import "./List.css";
import {Header} from "../../components/header/Header";
import {Navbar} from "../../components/navbar/Navbar";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {format} from "date-fns";
import {DateRange} from "react-date-range";
import {SearchItem} from "../../components/searchItem/SearchItem";

export const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [options, setOptions] = useState(location.state.options);
	const [openDate, setOpenDate] = useState(false);

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="list__Container">
				<div className="list__Wrapper">
					<div className="list__Search">
						<h1 className="list__SearchTitle">Search</h1>
						<div className="list__SearchItem">
							<label>Destination</label>
							<input placeholder={destination} type="text" />
						</div>
						<div className="list__SearchItem">
							<label>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								"MM/dd/yyyy"
							)} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()}
									ranges={date}
								/>
							)}
						</div>
						<div className="list__SearchItem">
							<label>Options</label>
							<div className="list__Options">
								<div className="list__OptionItem">
									<span className="list__OptionText">
										Min price <small>per night</small>
									</span>
									<input type="number" className="list__OptionInput" />
								</div>
								<div className="list__OptionItem">
									<span className="list__OptionText">
										Max price <small>per night</small>
									</span>
									<input type="number" className="list__OptionInput" />
								</div>
								<div className="list__OptionItem">
									<span className="list__OptionText">Adult</span>
									<input
										type="number"
										min={1}
										className="list__OptionInput"
										placeholder={options.adult}
									/>
								</div>
								<div className="list__OptionItem">
									<span className="list__OptionText">Children</span>
									<input
										type="number"
										min={0}
										className="list__OptionInput"
										placeholder={options.children}
									/>
								</div>
								<div className="list__OptionItem">
									<span className="list__OptionText">Room</span>
									<input
										type="number"
										min={1}
										className="list__OptionInput"
										placeholder={options.room}
									/>
								</div>
							</div>
							<button>Search</button>
						</div>
					</div>
					<div className="list__Result">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};
