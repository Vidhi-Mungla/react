import React from 'react';

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#"><img src="/img/logo.svg" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex searchn m-auto ">
                        <select name="catogry" id="" className='catogry'>
                            <option value="data">All Categories</option>
                            <option value="data">Milks and Dairies</option>
                            <option value="data">Wines & Alcohol</option>
                            <option value="data">Clothing & Beauty</option>
                            <option value="data">Pet Foods & Toy</option>
                            <option value="data">Fast Food</option>
                            <option value="data">Vegetables</option>
                        </select>
                        <div className="div d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </form>
                    <div className="icons d-flex p-4">
                        <div className="div1 mx-2">
                            <a href="#"><i className="fa-solid fa-code-compare"></i></a>
                            <a href="#">Compare</a>
                        </div>
                        <div className="div1 mx-2">
                        <a href="#"><i className="fa-regular fa-heart"></i></a>
                            <a href="#">Wishlist</a>
                        </div>
                        <div className="div1 mx-2">
                            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                            <a href="#">Cart</a>
                        </div>
                        <div className="div2 mx-2">
                        <a href="#"><i className="fa-regular fa-user"></i></a>
                            <a href="#">Account</a>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </nav>
        <hr />
            <nav className='sticky-top '>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid">
                        <div className="Browser">
                            <a className="navbar-brand" href="#"><i class="fa-solid fa-grip-vertical"></i> Browse All Categories <i class="fa-sharp fa-solid fa-arrow-down"></i></a>
                        </div>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link"><i class="fa-solid fa-fire"></i> Deals</a>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home <i class="fa-solid fa-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Shop <i class="fa-solid fa-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link " href="#" >Vendors <i class="fa-solid fa-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link " href="#" >Mega menu <i class="fa-solid fa-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link " href="#" >Bolg <i class="fa-solid fa-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link " href="#" >Pages <i class="fa-solid fa-chevron-down"></i></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link " href="#" >Contact</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
            </nav>
            <hr />
        </>
    );
}

export default Navbar;