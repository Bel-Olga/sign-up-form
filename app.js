const password = document.getElementById('password');
const confirmPassword = document.getElementById('password-confirm');
const error = document.querySelector('.error-msg');
const submitButton = document.querySelector('.btn-submit');

confirmPassword.addEventListener('keyup', () => {
    console.log('password: ' + password.value + ' conf: ' + confirmPassword.value);
   if (password.value === confirmPassword.value) {
    password.classList.add('right');
    confirmPassword.classList.add('right');
    error.style.display = "none";
   
} else {
    error.style.display = "inline-block";
    password.classList.remove('right');
    confirmPassword.classList.remove('right');
    password.classList.add('error');
    confirmPassword.classList.add('error');
}
})

    

