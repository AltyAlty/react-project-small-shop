/*Шаг №1 как использовать React Router DOM.*/
import {createBrowserRouter, RouterProvider, HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {BestSellers} from './components/BestSellers/BestSellers';
import {Product} from './components/Product/Product';

/*Шаг №2 как использовать React Router DOM.*/
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

        {/*Шаг №3 как использовать React Router DOM.*/}
        <RouterProvider router={router}/>

        {/*<HashRouter>*/}
        {/*    <Routes>*/}
        {/*        <Route path="/" element={<BestSellers />} />*/}
        {/*        <Route path="/products/:productID" element={<Product />} />*/}
        {/*    </Routes>*/}
        {/*</HashRouter>*/}
    </div>
};

export default App;