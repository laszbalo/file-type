module.exports = {
	test(buf) {
		return buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47;
	},
	meta: {
		ext: 'png',
		mime: 'image/png'
	}
}
