/*
Гайд: https://safronman.gitbook.io/react-intro-lesson/dop-1.-realizaciya-otzyvov

Что нужно для работы:

npm install axios react-router-dom
*/

/*Если поставить точку в конце команды "npx create-react-app .", то проект будет создан в папке, в которой мы
находимся.*/

/*"npm i prettier --save-dev" - команда для установки prettier, чтобы он автоматически форматировал код при сохранении.
Здесь не используется.*/

/*Кнопка не должна переводить нас на другую страницу, этим должна заниматься ссылка.*/

/*Как использовать "react-router-dom" смотри по шагам.*/

import './App.css';
/*Шаг №1 как использовать "react-router-dom".*/
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import {Header} from './Header';
import {BestSellers} from './BestSellers';
import {Product} from './Product';


/*Шаг №2 как использовать "react-router-dom".*/
const router = createBrowserRouter([
    {
        path: '/',
        element: <BestSellers/>,
    },
    {
        path: '/products/:productID',
        element: <Product/>,
    },
]);

function App(props) {
    return (
        <div className='appContainer'>
            <Header/>
            <hr className='divider'/>

            {/*Шаг №3 как использовать "react-router-dom".*/}
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;
