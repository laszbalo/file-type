module.exports = {
	test(buf) {
		return buf[8] === 0x57 && buf[9] === 0x45 && buf[10] === 0x42 && buf[11] === 0x50;
	},
	meta: {
		ext: 'webp',
		mime: 'image/webp'
	}
};
