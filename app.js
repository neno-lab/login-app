const form = document.querySelector('.form');
const formControl = document.querySelectorAll('.form-control');
const small = document.querySelectorAll('small');

let checkUsername = (username) => {
  let userNameError = `Username must be at least 3 characters`;
  if (
    formControl[0].classList.contains('success') ||
    formControl[0].classList.contains('error')
  ) {
    formControl[0].classList.remove('success');
    formControl[0].classList.remove('error');
  }
  if (username.length < 3) {
    formControl[0].classList.add('error');
    small[0].classList.add('error');
    small[0].innerHTML = userNameError;
  } else {
    formControl[0].classList.add('success');
  }
};

let checkEmail = (mail) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailError = 'Email is not valid';
  if (
    formControl[1].classList.contains('success') ||
    formControl[1].classList.contains('error')
  ) {
    formControl[1].classList.remove('success');
    formControl[1].classList.remove('error');
  }
  if (!re.test(String(mail).toLowerCase())) {
    formControl[1].classList.add('error');
    small[1].classList.add('error');
    small[1].innerHTML = emailError;
  } else {
    formControl[1].classList.add('success');
  }
};

let checkPassword = (pass) => {
  let passwordError = 'Password must be at least 6 characters';
  if (
    formControl[2].classList.contains('success') ||
    formControl[2].classList.contains('error')
  ) {
    formControl[2].classList.remove('success');
    formControl[2].classList.remove('error');
  }
  if (pass.length < 6) {
    formControl[2].classList.add('error');
    small[2].classList.add('error');
    small[2].innerHTML = passwordError;
  } else {
    formControl[2].classList.add('success');
  }

  checkConfrimPassword(pass);
};

let checkConfrimPassword = (cpass) => {
  let cpassError1 = 'Password is required';
  let cpassError2 = 'Passwords do not match';
  if (
    formControl[3].classList.contains('success') ||
    formControl[3].classList.contains('error')
  ) {
    formControl[3].classList.remove('success');
    formControl[3].classList.remove('error');
  }
  if (cpass === '') {
    formControl[3].classList.add('error');
    small[3].classList.add('error');
    small[3].innerHTML = cpassError1;
  } else if (form.cpass.value.trim() !== cpass) {
    formControl[3].classList.add('error');
    small[3].classList.add('error');
    small[3].innerHTML = cpassError2;
  } else {
    formControl[3].classList.add('success');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkUsername(form.username.value.trim());
  checkEmail(form.mail.value.trim());
  checkPassword(form.pass.value.trim());
});
