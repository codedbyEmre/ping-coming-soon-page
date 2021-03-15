const form = document.getElementById('form');
const email = document.getElementById('email');

// Error message
const showError = (input, message) => {
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
}
  
// Success message
const showSuccess = (input) => {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

// Check email
const checkEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value === ''){
        showError(input, 'Email cannot be empty')
    }else if (re.test(input.value.trim())) {
        showSuccess(input);
    }else{
        showError(input, 'Please provide a valid email address');
    }
}

// Event listener
form.addEventListener('submit', e => {
    e.preventDefault();

    checkEmail(email);
})