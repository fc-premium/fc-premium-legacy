const exec = require('child_process').exec;

const OUTPUT_FILE = 'out/build.js';
const HEADERS_FILE = 'fc-module-handler/tampermonkey.headers.ts';

module.exports = {
	watch: true,
	entry: './out/fc-module-handler/init.js',
	output: {
		path: __dirname,
		filename: OUTPUT_FILE
	},

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
	}]

};
