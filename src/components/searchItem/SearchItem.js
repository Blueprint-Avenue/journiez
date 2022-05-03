import "./searchItem.css";

export const SearchItem = () => {
	return (
		<div className="search__Item">
			<img
				src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
				alt=""
				className="search__ItemImg"
			/>
			<div className="search__ItemDesc">
				<h1 className="search__ItemTitle">Tower Street Apartments</h1>
				<span className="search__ItemDistance">500m from center</span>
				<span className="search__ItemTaxi">Free airport taxi</span>
				<span className="search__ItemSubtitle">
					Studio Apartment with Air conditioning
				</span>
				<span className="search__ItemFeatures">
					Entire studio • 1 bathroom • 21m² 1 full bed
				</span>
				<span className="search__ItemCancel">Free cancellation </span>
				<span className="search__ItemCancelSubtitle">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="search__ItemDetails">
				<div className="search__ItemRating">
					<span>Excellent</span>
					<button>8.9</button>
				</div>
				<div className="search__ItemDetailTexts">
					<span className="search__ItemPrice">$112</span>
					<span className="search__ItemTax">Includes taxes and fees</span>
					<button className="search__ItemCheckButton">See availability</button>
				</div>
			</div>
		</div>
	);
};
