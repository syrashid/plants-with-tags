const toggleForm = () => {
  const button = document.querySelector('.toggle-form');
  const form = document.querySelector('#new_plant');
  if (button) {
    button.addEventListener('click', () => {
      form.classList.toggle('d-none');
      button.classList.toggle('btn-outline-success');
      button.classList.toggle('btn-success');
    });
  };
}
export { toggleForm };
