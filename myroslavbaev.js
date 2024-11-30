// Замените на ваш ключ API и ID таблицы
const apiKey = 'AIzaSyDBCvQOQpCwkAzJKMXZ4kFCi025jh7gcCw';
const spreadsheetId = '1niaYMjngBcN0HuZd-wlS3ZQvruSrlPWgMSBI0h7RCzc';
const range = 'Sheet1!G4'; // Замените на нужный диапазон

// Формируем URL для запроса
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const value = data.values[0][0]; // Значение из ячейки
    document.getElementById('cellValue').textContent = value; // Отображаем значение на сайте
  })
  .catch(error => console.error('Ошибка:', error));
