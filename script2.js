// Получаем элементы формы
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedback');
const validCredentials = [
    { username: 'nanosov6', password: '8818', url:'anosovnazar.html' },
    { username: 'mmarchenko95', password: '4351', url: 'marchenkomax.html' },
    { username: 'yapulyashkin1', password: '3105', url: 'pylashkinyar.html' },
    { username: 'esinilshikov2', password: '5895', url: 'synilschikovegor.html' },
    { username: 'ksoroka10', password: '0924', url:'sorokakostya.html' },
    { username: 'ataranov22', password: '7871', url: 'taranovandrij.html' },
    { username: 'ishkarupilom', password: '6945', url: 'shkarupiloignat.html' },
    { username: 'ishofa2', password: '7731', url: 'shofaivan.html' },
    { username: 'tyarovik1', password: '6760', url: 'yaroviktym.html' }
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
