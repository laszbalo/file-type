module.exports = {
	test(buf) {
		return buf[0] === 0x38 && buf[1] === 0x42 && buf[2] === 0x50 && buf[3] === 0x53;
	},
	meta: {
		ext: 'psd',
		mime: 'image/vnd.adobe.photoshop'
	}
}
