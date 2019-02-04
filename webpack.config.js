const path = require( 'path' );

module.exports = {
	context: __dirname,
	entry: {
		index: './blocks/contact-card-block.js'
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: '[name].js',
	},
	// Ensures that whenever it finds a js file , it uses babel-loader to convert it to ES6
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [ "style-loader", "css-loader" ]
			}
		]
	}
};