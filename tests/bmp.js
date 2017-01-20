module.exports = {
	test(buf) {
		return buf[0] === 0x42 && buf[1] === 0x4D;
	},
	meta: {
		ext: 'bmp',
		mime: 'image/bmp'
	}
}
