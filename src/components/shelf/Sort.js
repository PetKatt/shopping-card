import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { updateSort } from "../../store/actions/sortActions";

import Selectbox from "../Selectbox";

const sortBy = [
	{ value: "", label: "Select" },
	{ value: "low price", label: "Lowest Price" },
	{ value: "high price", label: "Highest Price" }
];

class Sort extends Component {

	handleSort = (value) => {
		this.props.updateSort(value);
	}

	render() {
		return (
			<div className="sort">
				Sort By <Selectbox options={sortBy} handleOnChange={this.handleSort} />	
			</div>
		);
	}
}

Sort.propTypes = {
	updateSort: PropTypes.func.isRequired,
	sort: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
	sort: state.sort.items
});

export default connect(mapStateToProps, { updateSort })(Sort);