import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { updateFilters } from "../../store/actions/filterActions";

import Checkbox from "../Checkbox";
import StarButton from "../github/StarButton";

const availableSizes = [
	"SSSS",
	"SSS",
	"SS",
	"S",
	"G",
	"GG",
	"GGG"
];

class Filter extends Component {

	toggleCheckbox = (label) => 

	createCheckbox = (label) => (
		<Checkbox
			classes="filters-available-size"
			label={label}
			handleCheckboxChange={this.toggleCheckbox}
			key={label}	
		/>
	)

	createCheckboxes = () => (
		availableSizes.map(this.createCheckbox)
	)

	render() {
		return (
			<div className="filters">
				<h4 className="title">Sizes:</h4>
				{this.createCheckboxes()}
				<StarButton />
			</div>	
		);
	}
}