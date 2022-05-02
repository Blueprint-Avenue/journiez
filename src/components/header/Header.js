import {
	faBed,
	faCalendar,
	faCalendarDays,
	faCar,
	faPerson,
	faPersonSkiing,
	faPlane,
	faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./header.css";
import {DateRange} from "react-date-range";
import {useState} from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {format} from "date-fns";

export const Header = ({type}) => {
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const [openDate, setOpenDate] = useState(false);

	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === "i" ? options[name] + 1 : options[name] - 1,
			};
		});
	};

	return (
		<div className="header">
			<div
				className={
					type === "list" ? "header__Container listMode" : "header__Container"
				}
			>
				<div className="header__List">
					<div className="header__ListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stay</span>
					</div>
					<div className="header__ListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="header__ListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Car Rentals</span>
					</div>
					<div className="header__ListItem">
						<FontAwesomeIcon icon={faPersonSkiing} />
						<span>Attractions</span>
					</div>
					<div className="header__ListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport Taxis</span>
					</div>
				</div>
				{type !== "list" && (
					<>
						<h1 className="header__Title">
							A lifetime of discounts? It's Genius.
						</h1>
						<p className="header_description">
							Get rewarded for your travels - unlock instant savings of 10% or
							more with a free Journiez account
						</p>
						<button className="header__button">Sign in / Register</button>
						<div className="header__SearchBar">
							<div className="header__SearchItem">
								<FontAwesomeIcon icon={faBed} className="header__Icon" />
								<input
									type="text"
									placeholder="Where are you going?"
									className="header__SearchInput"
								/>
							</div>
							<div className="header__SearchItem">
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="header__Icon"
								/>
								<span
									onClick={() => setOpenDate(!openDate)}
									className="header__SearchText"
								>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
									date[0].endDate,
									"MM/dd/yyyy"
								)} `}</span>
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className="date__Calendar"
									/>
								)}
							</div>
							<div className="header__SearchItem">
								<FontAwesomeIcon icon={faPerson} className="header__Icon" />
								<span
									onClick={() => setOpenOptions(!openOptions)}
									className="header__SearchText"
								>
									{`${options.adult} adult · ${options.children} children · ${options.room} room`}
								</span>
								{openOptions && (
									<div className="options">
										<div className="option__Item">
											<span className="option__Text">Adult</span>
											<div className="option__Counter">
												<button
													disabled={options.adult <= 1}
													className="option__CounterButton"
													onClick={() => handleOption("adult", "d")}
												>
													-
												</button>
												<span className="option__CounterNumber">
													{options.adult}
												</span>
												<button
													className="option__CounterButton"
													onClick={() => handleOption("adult", "i")}
												>
													+
												</button>
											</div>
										</div>
										<div className="option__Item">
											<span className="option__Text">Children</span>
											<div className="option__Counter">
												<button
													disabled={options.children <= 0}
													className="option__CounterButton"
													onClick={() => handleOption("children", "d")}
												>
													-
												</button>
												<span className="option__CounterNumber">
													{options.children}
												</span>
												<button
													className="option__CounterButton"
													onClick={() => handleOption("children", "i")}
												>
													+
												</button>
											</div>
										</div>
										<div className="option__Item">
											<span className="option__Text">Rooms</span>
											<div className="option__Counter">
												<button
													disabled={options.room <= 1}
													className="option__CounterButton"
													onClick={() => handleOption("room", "d")}
												>
													-
												</button>
												<span className="option__CounterNumber">
													{options.room}
												</span>
												<button
													className="option__CounterButton"
													onClick={() => handleOption("room", "i")}
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="header__SearchItem">
								<button className="header__button">Search</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
