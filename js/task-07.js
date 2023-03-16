const styleInput = document.querySelector('#font-size-control');
const styleText = document.querySelector('#text');

styleText.style.fontSize = `${styleInput.value}px`;

styleInput.addEventListener("input", (event) => {
	styleText.style.fontSize = `${styleInput.value}px`;
})
