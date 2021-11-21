function loadBackground() {
	const backgrounds = {
		"body": "assets/images/fruits_and_vegetables.png",
	};

	for (let selector in backgrounds) {
		let element = document.querySelector(selector);
		element.style.backgroundImage = `url('${backgrounds[selector]}')`;
	}
}

document.addEventListener(
	"DOMContentLoaded",
	loadBackground
);
