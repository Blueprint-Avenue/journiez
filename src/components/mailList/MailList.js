import "./mailList.css";

export const MailList = () => {
	return (
		<div className="mail">
			<h1 className="mail_Title">Save time, save money!</h1>
			<span className="mail__description">
				Sign up and we'll send the best deals to you
			</span>
			<div className="mail__InputContainer">
				<input type="text" placeholder="Your Email" />
				<button>Subscribe</button>
			</div>
		</div>
	);
};
