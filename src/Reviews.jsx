import avatarIcon from './assets/img/avatarIcon.svg';
import {useState} from 'react';

export const Reviews = () => {
    const [reviews, setReviews] = useState([
        {
            author: 'Jane Cooper',
            title: 'Amazing Product',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            date: '01/01/2021',
            rating: 4
        },

        {
            author: 'Max Doodle',
            title: 'Best choice',
            text: 'Various versions have evolved over the years, sometimes by accident,sometimes on purpose (injected humour and the like).',
            date: '05/23/2021',
            rating: 5
        },
    ]);

    const [currentReview, setCurrentReview] = useState('');

    const currentReviewHandler = (e) => {
        let newValue = e.currentTarget.value;
        setCurrentReview(newValue);
    };

    const addReviewHandler = () => {
        const newReview = {
            author: 'Jane Cooper',
            title: 'Amazing Product',
            text: currentReview,
            date: '05/23/2021',
            rating: 5
        };

        setReviews([newReview, ...reviews]);
    };

    return (
        <div>
            <div className='review'>
                <h3>Reviews ({reviews.length})</h3>
                <textarea placeholder='Provide your text...' onChange={currentReviewHandler}></textarea>
                <button onClick={addReviewHandler}>Send review</button>
            </div>

            {reviews.map((r) => {
                return (
                    <div className='reviewField'>
                        <div className='info'>
                            <div className='user'>
                                <img src={avatarIcon} alt=''/>

                                <div className='infoBox'>
                                    <p className='author'>{r.author}</p>
                                    <p className='rating'>{r.rating} Rating</p>
                                </div>
                            </div>

                            <div>
                                <p className='date'>{r.date}</p>
                            </div>
                        </div>

                        <div className='content'>
                            <p className='title'>{r.title}</p>
                            <p>{r.text}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};