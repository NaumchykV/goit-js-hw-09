const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

document.addEventListener('DOMContentLoaded', () => {
  let storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    emailInput.value = parsedData.email;
    messageTextarea.value = parsedData.message;
    console.log(emailInput);
  }
});

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  emailInput.value = '';
  messageTextarea.value = '';
  form.reset();
});
