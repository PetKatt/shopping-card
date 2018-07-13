import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { updateSort } from "../../store/actions/sortActions";

import Selectbox from "../Selectbox";

class Sort extends Component {
	render() {
		return (

		);
	}
}

Sort.propTypes = {

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { updateSort })(Sort);