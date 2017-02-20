module.exports = {
	entry: [
		__dirname + '/source/App.js'
	],
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module:{
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
		        presets: ['es2015','react']
		    }
		}]
	} 		
};
