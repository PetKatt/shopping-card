const express = require("express");
const cors = require("cors");
const app = express();

const port = 8001;

const routes = {
	products: "/api/products"
};

app.use(cors());

// Uploading products...
app.get(routes.products, (req, res) => {
	res.sendFile(__dirname + "/data/products.json");
});

app.use("*", (req, res) => {
	res.redirect(routes.products);
});


app.listen(port, () => console.log(`Listening on port ${port}...`));