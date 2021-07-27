const url = "/assets/i18n/en.json?hash=60fe849de39c8efa95feb4d4_xO38YasLqpolegE769yz"

const array = ['i18n', 'getUsers', 'hashtags',0];

array.forEach((item)=>{
	if (url.includes(item,-100)) {
		alert(item)
	}
})
