/*
Создание шаблона проекта: npx create-react-app .
Установки prettier для автоматического форматирования кода при сохранении: npm i prettier --save-dev
Установка Axios и react-router-dom: npm install axios react-router-dom

Установка всех модулей (если необходимо): npm install
Запуск приложения: npm start
*/

/*Файл "index.tsx" является точкой входа проекта.
Гайд (более продвинутый): https://safronman.gitbook.io/react-intro-lesson
Если поставить точку в конце команды "npx create-react-app .", то проект будет создан в папке, в которой мы находимся.
Кнопка не должна переводить нас на другую страницу, этим должна заниматься ссылка.
Как использовать react-router-dom можно отследить по шагам.*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();