const errorMessage = document.getElementById('error-message');
const emailInput = document.getElementById('email-input');
const emailLabel = document.getElementById('email-label');
const signUpForm = document.getElementById('sign-up-form');
const successMessage = document.getElementById('success-message');
const userEmail = document.getElementById('user-email');
const successButton = document.getElementById('success-button');

function showError (message) {
    emailInput.classList.add('input-error');
    emailLabel.classList.add('label-error');
    errorMessage.innerHTML = `${message}`;
    errorMessage.style.display = 'block';
}
function hideError () {
    emailInput.classList.remove('input-error');
    emailLabel.classList.remove('label-error');
    errorMessage.style.display = 'none';
}

function showMessage(email) {
    userEmail.innerHTML = email;
    successMessage.style.display = 'block';
}


signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email-input').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('Enter Correct Email');
        console.log('not correct');
        return false;
    }
    console.log('correct');
    emailInput.value='';
    hideError();
    showMessage(email);
})

successButton.onclick = () => {
    successMessage.style.display = 'none';
}
