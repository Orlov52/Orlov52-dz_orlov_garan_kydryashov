document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Остановить отправку формы

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Здесь можно добавить код для сохранения данных, например, отправить на сервер
    alert(`Спасибо за регистрацию, ${name}!`);
    
    // Очистить форму
    document.getElementById('registrationForm').reset();
});
