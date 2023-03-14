const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault(); 

  const formElements = event.currentTarget.elements;   
  const email = formElements.email.value;
  const password= formElements.password.value;

const formData = {
  email,
  password,
}

if (email === "") {
  alert("Введіть, будь ласка, електронну адресу");
} else if (password === "") {
  alert("Введіть, будь ласка, пароль.");
} else {
  console.log(formData);
  formEl.reset();
  console.log(formEl);
}  
}

//   const formData = new FormData(event.currentTarget);
// formData.forEach((value, name) => {
//   console.log(value);
//   console.log(name);
// });
// console.log(formData);
  // console.dir(formElements);