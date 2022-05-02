import "./navbar.css";

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav__Container">
				<span className="logo">Journiez</span>
				<div className="nav__Items">
					<button className="nav__button">Register</button>
					<button className="nav__button">Login</button>
				</div>
			</div>
		</div>
	);
};
