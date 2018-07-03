import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect }	from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
import { addProduct } from "../../store/actions/floatCartActions";

class Shelf extends Component {
	
	componentWillMount() {
		this.props.fetchProducts();
	}

	render() {
		return (
			<React.Fragment>
				<Filter />
				<div className="shelf-container">
					<ShelfHeader 
				</div>
			</React.Fragment>
		);
	}
}

Shelf.propTypes = {
	fetchProducts: PropTypes.func.isRequired,
	products: PropTypes.array.isRequired,
	addProduct: PropTypes.func.isRequired,
	filters: PropTypes.array,
	sort: PropTypes.string
}

const mapStateToProps = state => ({
	products: state.products.items,
	filters: state.filters.items,
	sort: state.sort.item
})

export default connect(mapStateToProps, { fetchProducts, addProduct })(Shelf);