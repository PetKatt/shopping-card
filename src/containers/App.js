import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";
import bannerImage from "../static/banner.jpg";
import store from "../store";

import Corner from "../components/github/Corner";
import Banner from "../components/Banner";
import Shelf from "../components/shelf/Shelf";
import Footer from "../components/Footer";
import FloatCart from "../components/floatCart/FloatCart";

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	      <div className="App">
	        <Corner />
	        <Banner src={bannerImage} alt="Plakat Sklepu" />
	        <main>
	        	<Shelf />
	        </main>
	        <Footer />
	        <FloatCart />
	      </div>
	    </Provider>
    );
  }
}

export default App;
