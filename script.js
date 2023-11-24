
const text = ["the stars, they twinkle forevermore",
"if only i could find my way to the heavenly constellations",
"strange, the sky looks empty today."];

const number = Math.floor(Math.random() * 2);

const randomText = text[number];

document.getElementById("bottom-text").innerHTML = randomText;
