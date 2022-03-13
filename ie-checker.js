var userAgent = window.navigator.userAgent;
var isIE10OrOlder = userAgent.indexOf("MSIE") > 0;
var isIE11 = userAgent.indexOf('Trident/') > 0;

if (isIE10OrOlder || isIE11) {
  var passwordErrorEl = document.querySelector('.old-browser-msg');
  passwordErrorEl.style.display = 'block';
}