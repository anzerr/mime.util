
const defaultList = require('./src/default.js');

class Mime {

	constructor() {
		this.type = {};
		this._default = 'text/plain';
		this.load(defaultList);
	}

	load(map) {
		for (let i in map) {
			for (let x in map[i]) {
				this.type[map[i][x]] = i;
			}
		}
		return this;
	}

	lookup(file, defaultType) {
		if (typeof (file) !== 'string') {
			return (defaultType || this._default);
		}
		return (this.type[file.replace(/.*[\.\/\\]/, '').toLowerCase()] || defaultType || this._default);
	}

}

module.exports = new Mime();
