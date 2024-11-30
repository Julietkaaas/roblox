// Получаем элементы формы
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');
const validCredentials = [
    { username: 'mbaevm3', password: '2225', url:'myroslavbaev.html' },
    { username: 'tdidikm', password: '6284', url: 'didiktanya.html' },
    { username: 'knazarovm', password: '2791', url: 'kyrylonazarov.html' },
    { username: 'lubchukm', password: '8680', url: 'lubchukegor.html' }
];
// Обработчик события при вводе в поля формы
usernameInput.addEventListener('input', validateInput);
passwordInput.addEventListener('input', validateInput);

// Обработчик события отправки формы
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Находим объект с правильными логином и паролем
    const validCredential = validCredentials.find(cred => 
        cred.username === enteredUsername && cred.password === enteredPassword
    );

    if (validCredential) {
        feedback.textContent = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = validCredential.url; // Перенаправление на URL, связанный с логином
        }, 1000); // Небольшая задержка перед перенаправлением
    } else {
        feedback.textContent = 'Invalid username or password. Please try again.';
    }
});

// Функция для валидации ввода
function validateInput() {
    if (usernameInput.value && passwordInput.value) {
        feedback.textContent = '';
    } else {
        feedback.textContent = 'Both fields are required';
    }
}
