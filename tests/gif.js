module.exports = {
	test(buf) {
		return buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46;
	},
	meta: {
		ext: 'gif',
		mime: 'image/gif'
	}
};
