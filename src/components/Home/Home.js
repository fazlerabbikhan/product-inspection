import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='summary'>
                <div className='basic'>
                    <h1>Your next watch <br />
                        <span className='span'>Your best watch</span></h1>
                    <h3>Apple produces the best quality watches. If you haven't use Apple watch before, we can assure you that you are going to experience the very best you have ever had.</h3>
                    <button className='buy-button'>
                        <p>Order Now</p>
                    </button>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1614106765035-bceac4ac1911" alt="" />
                </div>
            </div>
            <h2>Customer Reviews (3)</h2>
            <button className='see-all-button'>
                <p>See all reviews</p>
            </button>
        </div>
    );
};

export default Home;