const cr2 = require('./cr2');

module.exports = {
	test(buf) {
		return !cr2.test(buf) && ((buf[0] === 0x49 && buf[1] === 0x49 && buf[2] === 0x2A && buf[3] === 0x0) || (buf[0] === 0x4D && buf[1] === 0x4D && buf[2] === 0x0 && buf[3] === 0x2A));
	},
	meta: {
		ext: 'tif',
		mime: 'image/tiff'
	}
};
