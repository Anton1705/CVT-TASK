// toggle input display 
// переключатель видимости пароля, в поле ввода пароля
var togglePasswordEl = document.querySelector('.toggle-password');

togglePasswordEl.addEventListener('click', function () {  
  if (passwordInputEl.type === 'password') {
    passwordInputEl.type = 'text';
  } else {
    passwordInputEl.type = 'password';
  }
});

// form validation. Обьект содержащий типы ошибок для формы
var ERRORS = {
  password: 'Пароль должен содержать <br> a-z A-Z <br> минимум 6 символов <br> заглавную букву, цифру и спец символ',
  email: 'Введенный email некорректен',
  empty: function(fieldName) { return 'Пожалуйста заполните поле ' + fieldName }
}

//регулярные выражения для емейла и пароля. Метод, который выполняет поиск совпадения в строке. 
var validationRegex = {
  email: /\S+@\S+\.\S+/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_}{()])(?=.{6,})/g
}

var loginButtonEl = document.querySelector('.login-button');
var emailInputEl = document.querySelector('.email-input');
var passwordInputEl = document.querySelector('.password-input');
var errorListEl = document.querySelector('.error-list');
var successMsgEl = document.querySelector('.success-msg');

// далее  функции для проверки полей пароля, емейла и проверка на незаполненые поля
loginButtonEl.addEventListener('click', function() {
  resetValidationMsgs();

  var emailError = checkField('email', emailInputEl.value);
  var passwordError = checkField('password', passwordInputEl.value);

  if (emailError || passwordError) {
    setErrors([emailError, passwordError]);
  } else {
    setSuccessMsg();
  }
});

function checkField(fieldName, fieldValue) {
  if (!fieldValue) {
    return ERRORS['empty'](fieldName);
  }

  if (!validationRegex[fieldName].test(fieldValue)) {
    return ERRORS[fieldName];
  }
}

function resetValidationMsgs() {
  errorListEl.innerHTML = '';
  successMsgEl.innerHTML = '';
}

function setErrors(errors) {
  errors.forEach(function(error) {
    if (error) {
      var errorEl = document.createElement('div');
      errorEl.innerHTML = error;
      errorListEl.append(errorEl);
    }
  });
}

function setSuccessMsg() {
  successMsgEl.innerHTML = 'Валидация прошла успешно';
}
