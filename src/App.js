/*Шаг №1 как использовать react-router-dom.*/
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {BestSellers} from './components/BestSellers/BestSellers';
import {Product} from './components/Product/Product';

/*Шаг №2 как использовать react-router-dom.*/
const router = createBrowserRouter([
    {
        path: '/',
        element: <BestSellers/>
    },

    {
        path: '/products/:productID',
        element: <Product/>
    }
]);

const App = () => {
    return <div className='appContainer'>
        <Header/>
        <hr className='divider'/>

        {/*Шаг №3 как использовать react-router-dom.*/}
        <RouterProvider router={router}/>
    </div>
};

export default App;