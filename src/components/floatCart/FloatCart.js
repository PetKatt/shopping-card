import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { loadCart, removeProduct } from "../../store/actions/floatCartActions";
import { updateCart } from "../../store/actions/updateCartActions";

import CartProduct from "./CartProduct";

import persistentCart from "../../persistentCart";

import util from "../../util";


class FloatCart extends Component {

	state = {
		isOpen: false
	};

	componentWillMount() {

	}

	render() {
		return (
			
		);
	}
}

FloatCart.propTypes = {
	loadCart: PropTypes.func.isRequired,
	updateCart: PropTypes.func.isRequired,
	cartProducts: PropTypes.array.isRequired,
	newProduct: PropTypes.object,
	removeProduct: PropTypes.func,
	productToRemove: PropTypes.object
};

const mapStateToProps = state => ({
	cartProducts: state.cartProducts.items,
	newProduct: state.cartProducts.item,
	productToRemove: state.cartProducts.itemToRemove,
	cartTotals: state.cartTotals.item
});

export default connect(mapStateToProps, { loadCart, updateCart, removeProduct })(FloatCart);