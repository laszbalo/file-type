module.exports = {
	test(buf) {
		return buf[0] === 0x46 && buf[1] === 0x4C && buf[2] === 0x49 && buf[3] === 0x46;
	},
	meta: {
		ext: 'flif',
		mime: 'image/flif'
	}
};
