module.exports = {
	test(buf) {
		return buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF;
	},
	meta: {
		ext: 'jpg',
		mime: 'image/jpeg'
	}
};
