function nextPassword() {
  var emailInput = document.querySelector('.email1');
  var nextButton = document.querySelector('.button1');
    var emailLabel = document.querySelector('.h41');
    
    emailLabel.textContent = "Password";
    
  var passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.classList.add('password1');
    
  emailInput.parentNode.replaceChild(passwordInput, emailInput);
    
  nextButton.value = 'Sign in';
    
  nextButton.onclick = function() {
    alert('Signing in...');
  };
}