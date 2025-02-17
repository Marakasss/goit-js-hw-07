const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', manualSubmit);

function manualSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (email === '' || password === '') {
        return alert('All form fields must be filled in');
    }
    const newUser = { email, password };
    form.reset();
    console.log(newUser);
}

document.body.classList.add("special-bg");
const paragraph = document.querySelector('a');
paragraph.style.color = '#f7f8fd'
