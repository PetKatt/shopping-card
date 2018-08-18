import { FETCH_PRODUCTS } from "./types";
import axios from "axios";

const productsAPI = "http://localhost:8001/api/products";

const compare = {
	"descending": (a, b) => {
		if (a.price < b.price)
			return -1;
		if (a.price > b.price)
			return 1;
		return 0;
	},
	"ascending": (a, b) => {
		if (a.price > b.price)
			return -1;
		if (a.price < b.price)
			return 1;
		return 0;
	}
};

export const fetchProducts = (filters, sortBy) => dispatch => {

	axios.get(productsAPI)
		.then(res => {
			let { products } = res.data;

			if (!!filters && filters.length > 0) {
				products = products.filter(
					p => filters.find(
						f => p.availableSizes.find(
							size => size === f)));
			}

			if (!!sortBy) {
				products = products.sort(compare[sortBy]);
			}

			return dispatch({
				type: FETCH_PRODUCTS,
				payload: products
			});

		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching products");
		});
};