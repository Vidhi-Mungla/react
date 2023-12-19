import React from 'react';

function Slider(props) {
    return (
        <>
            <div id="carouselExampleFade" class="carousel slide p-2 carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/slider-1.png" class="d-block w-100" alt="..."/>
                        <div className="info">
                            <h1>Fresh Vegetables <br /> Big  discount</h1>
                            <p className='mt-3'>Save up to 50% off om your first odder</p>
                            <form action="" className='search'>
                                <input type="email"placeholder='Your email address' />
                                <button className='btn'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/slider-2.png" class="d-block w-100" alt="..."/>
                        <div className="info">
                            <h1>Don't miss amazing <br /> grocery  deals</h1>
                            <p className='mt-3'>Sign up for the daily newsletter</p>
                            <form action="" className='search'>
                                <input type="email"placeholder='Your email address' />
                                <button className='btn'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                <button   button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                
            </div>
        </>
    );
}

export default Slider;