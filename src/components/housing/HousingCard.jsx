import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./HousingCard.css";


const HousingCard = ({data}) => {

	return (
		<Link to={`/housing/${data.id}`} state={data}>
			<article className="thumb flex">
				<h2>{data.title}</h2>
			</article>
		</Link>
	);
};

HousingCard.propTypes = {
	data: PropTypes.object.isRequired
};

export default HousingCard;