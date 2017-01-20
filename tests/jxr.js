module.exports = {
	test(buf) {
		return buf[0] === 0x49 && buf[1] === 0x49 && buf[2] === 0xBC;
	},
	meta: {
		ext: 'jxr',
		mime: 'image/vnd.ms-photo'
	}
}
