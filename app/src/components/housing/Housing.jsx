import { React } from "react";
import { PropTypes } from "prop-types";

import "./Housing.css";

import dropWindow from "../common/dropWindow";
import Carousel from "./Carousel";

const Housing = ({data}) => {

	return (
		<>	
			<Carousel gallery={data.pictures}/>
			<div className="dropdown-container flex">
				{dropWindow({id: "description", text: [...data.description]})}
				{dropWindow({id: "equipements", text: data.equipments})}
			</div>
		</>
	);
};

Housing.propTypes = {
	data: PropTypes.object.isRequired
};

export default Housing;