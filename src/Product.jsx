import rating from './assets/img/rating.svg';
import cartWhite from './assets/img/cartWhite.svg';
import arrow from './assets/img/arrowBack.svg';
import {useEffect, useState} from 'react';
import axios from 'axios';
/*Шаг №6 как использовать "react-router-dom".*/
import {Link, useParams} from 'react-router-dom';
import {Loader} from './Loader';
import {Reviews} from './Reviews';


export const Product = () => {
    /*Шаг №7 как использовать "react-router-dom".*/
    const {productID} = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        /*Шаг №8 как использовать "react-router-dom".*/
        axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productID}`)
            .then((res) => {
                const product = res.data;
                setProduct(product);
            });
    }, []);

    const [isProductInCart, setIsProductIncart] = useState(false);

    const addProductToCartHandler = () => {
        alert('Товар успешно добавлен в корзину');
        setIsProductIncart(true);
    };

    if (product === null) {
        return (
            <Loader/>
        );
    }

    return (
        <div>
            <div className='arrowBack'>
                {/*Шаг №9 как использовать "react-router-dom".*/}
                <Link to={'/'}>
                    <img src={arrow} alt=''/>
                    Back to Best Seller
                </Link>
            </div>

            <div className='product'>
                <img src={product.image} alt=''/>

                <div className='info'>
                    <p className='title'>{product.title}</p>
                    <p className='price'>$ {product.price}</p>

                    <div className='rating'>
                        <p>Rating: {product.rating.rate}</p>
                        <img src={rating} alt=''/>
                    </div>

                    <div className='category'>
                        <span>Category:</span>
                        <p>{product.category}</p>
                    </div>

                    <p className='description'>{product.description}</p>

                    <button onClick={addProductToCartHandler}>
                        <img src={cartWhite} alt=''/>
                        {isProductInCart ? 'Go to cart' : 'Add to cart'}
                    </button>
                </div>
            </div>

            <Reviews/>
        </div>
    );
};