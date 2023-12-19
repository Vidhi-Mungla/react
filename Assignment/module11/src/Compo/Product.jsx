import React from 'react';

function Product(props) {
    return (
        <>
            <div className="container-fluid product p-4">
                <div className="row">
                    <div className="col d-flex">
                        <h2>Featured Categories</h2>
                        <ul className='d-flex'>
                            <li><a href="#">Cake & Milk</a></li>
                            <li><a href="#">Coffes & Teas</a></li>
                            <li><a href="#">Pet Foods</a></li>
                            <li><a href="#">Vegetables</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row text-center d-flex justify-content-between">
                    <div className="col-1">
                        <div class="card">
                            <img src="img/cat-3.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Snack</h5>
                                <p class="card-text">56 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/cat-1.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Vegetables</h5>
                                <p class="card-text">72 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/cat-2.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Strawberry</h5>
                                <p class="card-text">36 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/cat-4.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Black plum</h5>
                                <p class="card-text">123 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/cat-5.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Custard apple</h5>
                                <p class="card-text">34 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/cat-14.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Coffe & Tea</h5>
                                <p class="card-text">89 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/cat-15.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Headphone</h5>
                                <p class="card-text">87 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/cat-13.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Cake & Milk</h5>
                                <p class="card-text">26 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/cat-12.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Oganic Kiwi</h5>
                                <p class="card-text">28 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div class="card">
                            <img src="img/cat-11.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Peach</h5>
                                <p class="card-text">14 items</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Product;