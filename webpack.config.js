const exec = require('child_process').exec;

const OUTPUT_FILE = 'out/build.js';

module.exports = {
	watch: true,
	entry: './out/init.js',
	output: {
		path: __dirname,
		filename: OUTPUT_FILE
	},

	mode: 'none',

	optimization: {
		minimize: false
	},

	plugins: [{
		apply: (compiler) => {
			compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
				exec('bash postbuild.sh', (err, stdout, stderr) => {
					if (stdout) process.stdout.write(stdout);
					if (stderr) process.stderr.write(stderr);
				});
			});
		}
	}],

	module: {
		rules: [{
			test: /\.txt$/,
			use: [{
				loader: 'raw-loader',
			}]
		}]
	}
};
