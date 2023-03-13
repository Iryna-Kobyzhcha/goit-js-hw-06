const refs = {
  input: document.querySelector('#validation-input'),
  type: "text",
  dataLength: 6,
  placeholder: "Please enter 6 symbols",
  };

  refs.input.addEventListener('blur', onInputBlur);

  function onInputBlur(event) {
    // event.preventDefault();

    if (event.currentTarget.value.length === Number.parseInt(refs.input.dataset.length, 10))
  {
      refs.input.classList.remove("invalid");
      refs.input.classList.add("valid");
    } else {
      refs.input.classList.remove("valid");
      refs.input.classList.add("invalid");
      
    }
      
    }
