import {useEffect, useState} from 'react';
/*Шаг №6 как использовать React Router DOM.*/
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import rating from '../../assets/img/rating.svg';
import cartWhite from '../../assets/img/cartWhite.svg';
import arrow from '../../assets/img/arrowBack.svg';
import {Loader} from '../Loader/Loader';
import {Reviews} from '../Reviews/Reviews';

export const Product = () => {
    /*Шаг №7 как использовать React Router DOM.*/
    const {productID} = useParams();
    const [product, setProduct] = useState(null);
    const [isProductInCart, setIsProductInCart] = useState(false);

    useEffect(() => {
            /*Шаг №8 как использовать React Router DOM.*/
            axios.get(`https://masterclass.kimitsu.it-incubator.io/api/products/${productID}`)
                .then((res) => {
                    const product = res.data;
                    setProduct(product);
                });
        },
        []);

    const onAddProductToCartClick = () => {
        alert('Товар успешно добавлен в корзину');
        setIsProductInCart(true);
    };

    if (product === null) return <Loader/>;

    return <div>
        <div className='arrowBack'>
            {/*Шаг №9 как использовать React Router DOM.*/}
            <Link to={'/'}>
                <img src={arrow} alt='Back to Best Sellers'/>
                Back to Best Sellers
            </Link>
        </div>

        <div className='product'>
            <img src={product.image} alt={product.title}/>

            <div className='info'>
                <p className='title'>{product.title}</p>
                <p className='price'>$ {product.price}</p>

                <div className='rating'>
                    <p>Rating: {product.rating.rate}</p>
                    <img src={rating} alt={product.rating.rate}/>
                </div>

                <div className='category'>
                    <span>Category:</span>
                    <p>{product.category}</p>
                </div>

                <p className='description'>{product.description}</p>

                <button onClick={onAddProductToCartClick}>
                    <img src={cartWhite} alt=''/>
                    {isProductInCart ? 'Go to cart' : 'Add to cart'}
                </button>
            </div>
        </div>

        <Reviews/>
    </div>
};