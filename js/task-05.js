const refs = {
input: document.querySelector('#name-input'),
nameLabel: document.querySelector('#name-output'), 
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// 'change' для радіокнопок і чекбоксов
// refs.input.addEventListener('change', onInputChange);
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.preventDefault();
  console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;

  if (refs.nameLabel.textContent.trim() === "") {
		refs.nameLabel.textContent = "Anonymous";
	}
}
// function onInputFocus() {
//   console.log('input get focus');
// }
// function onInputBlur() {
//   console.log('input get blur');
// }
