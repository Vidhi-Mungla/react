import React from 'react';
import '../css/style.css';
import data from './data.json';

function Home()
{
    return(
        <>
  
                <div className="header">
                <div className='right'><h2>Booking.com</h2></div>
                <div className='left'>
                 

                 <div className='inner-div'>
                 <div className="nri x">NRI</div>
                 <div className="mainflag x">
                 <div className="flag"></div>
                 </div>
                <div className="logo x">
                <i class="fa-regular fa-circle-question"></i>
                </div>
                <div className="list x">List Your Property</div>
                <div className="register">
                <a href="">Register</a>
                </div>
                <div className="sign-in">
                <a href="">sign-in</a>
                </div>
               
                 </div>
                 <div className='usr y'><i class="fa-regular fa-circle-user"></i></div>
                <div className='bar y'><i class="fa-solid fa-bars"></i></div>
                </div>
                </div>


                <div className="header-down">
                <div className="header-inner">

                <li class="stay"> <i class="fa-solid fa-bed"></i>  <a href="">Stays</a></li>
                <li class="flight"> <i class="fa-solid fa-jet-fighter"></i>  <a href="">Flights</a></li>
                <li class="hotel"> <i class="fa-solid fa-earth-europe"></i>  <a href="">Flight + Hotel</a></li>
                <li class="car"> <i class="fa-solid fa-car"></i>  <a href="">Car rental</a></li>
                <li class="att"><i class="fa-solid fa-atom"></i>  <a href="">Attractions</a></li>
                <li class="taxi"> <i class="fa-solid fa-car-on"></i>  <a href="">Airport Taxis</a></li>
                <li class="more">  <a href="">more</a> <i class="fa-solid fa-angle-up"></i></li> 
                  </div>
                </div>


                <div className='img'>
                <div className="text">
                    <h1>Howzat for a perfect stay</h1>
                    <p>Search hotels, homes and much more</p>
                    <div className="discover">Discover more</div>
                </div>
                </div>


                <div className='main'> 
                <div className='first'> 
                 <i class="fa-solid fa-bed"/> <input type="text" placeholder="Where are you going ?"/>
                </div>
                
                <div className='second'>
                <i class="fa-solid fa-calendar-days"></i>  check-in Date -- Check-out Date
                </div>

                <div className='third'>
                <i class="fa-solid fa-user"></i>  2 adults . 0 children . 1 room 
                <p><i class="fa-solid fa-angle-down"></i></p> 
                </div>

                <div className='four'>Search</div>
                
                </div>

       
    {
    data.map((vl,i)=>(
        <div className='card1'>
   
        <div className='image'>
            <a href='#'><img src={vl.img_url} height={300}/></a>
            <span><a href='#'><i class="fa-regular fa-heart"></i></a></span>
        </div>
        <div className='info'>
            <div className='text'>
                <h2>
                    {
                        vl.title
                    }
                </h2>
                <a href='#'>Anjuna Beach,</a>
                <a href='#'>Anjuna</a>
                <span><a href='#'>Show on map</a></span>
               
                <p>
                    {
                        vl.description
                    }
                </p>
            </div>
            <div className='btns'>
                <div className='book'>New to Booking.com</div>
                <button>Show Prices</button>
            </div>
        </div>
    
</div>
))
                }
     


        </>
    
    );
       
}
export default Home;