const div = document.querySelector('div');
const button = document.querySelector('button');
const form = document.querySelector('form');


div.addEventListener('click', () => alert('You have clicked div'),);
button.addEventListener('click', (e) => {
  alert('You have clicked Button');
  e.stopPropagation();  // Stopping event bubbling
});


form.addEventListener('submit', (e) => {
    const input = form.querySelector('input').value;
  e.preventDefault();  // Preventing to refresh the page when the submit button is clicked
  alert('Form submitted with:'+ input);
});