import React, { useState } from "react";
import banner1 from './img/banner1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./Data";
import Explorefoodvar1 from "./Explorefoodvar1";
import img1 from './img/banner5.png';
import banner6 from './img/banner6.png';
import banner7 from './img/banner7.png';

function Landing(props) {
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration: 1500
    });
  }, [])

  const [filter, setFilter] = useState('');
 

  useEffect(()=>{setFilter(props.filter)},[props.filter])

  let dataSearch = Data.cardData.filter(item => {
    return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter?.toString().toLowerCase())
    )
  });
  return (
    <>
      <div>


        <section className="banner" data-aos="fade-up">
          <div className="container" data-aos="fade-left">
            <div className="left1">
              <h1 data-aos="fade-up">Order food from favourite restaurants near you.
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam et purus a odio finibus bibendum amet leo.
              </p>
              <a href="" className="btn">Order Now <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </a>
              <a href="" className="btn btn-white">Learn More <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </a>
            </div>
            <div className="right1"><img src={banner1} className="im1 mb-4" /></div>

          </div>
        </section>
        <section className="counter" data-aos="fade-up">
          <div className="container" data-aos="fade-left">
            <div classNam="cbox">
              <h2 data-aos="fade-up" className="timer count-title count-number" data-to="1287" duration="1500">1287</h2>
              <p className='fs-6'>Savings</p>
            </div>
            <div className="cbox">
              <h2 data-aos="fade-up" className="timer count-title count-number" data-to="5786" duration="1500">5786</h2>
              <p className='fs-6'>Savings</p>
            </div>
            <div classNam="cbox">
              <h2 data-aos="fade-up" className="timer count-title count-number" data-to="1440" duration="1500">1440</h2>
              <p className='fs-6'>Savings</p>
            </div>
            <div classNam="cbox">
              <h2 data-aos="fade-up" className="timer count-title count-number" data-to="7110" data-speed="1500">7110</h2>
              <p className='fs-6'>Savings</p>
            </div>
          </div>
        </section>
        <section className='explorefood'>
          <section className='d-flex container'>
            <div className="containers">
              {/* <h1 className="">Explore Our Foods </h1> */}
              {Explorefoodvar1.map((i) => (
                <>
                <p className='fs-1 efHeader mt-3'>{i.resDetails}</p>
                <p className="efDetails">{i.resDetails1}</p>
                </>))}
            </div>
          </section>
        </section>

        <div className='py-4 container'>
          <div className=" row justify-content-center">
            {dataSearch.map((item, index) => {
              // <p className='fs-6 mt-3'>{item.resDetails}</p>

              // ))
              return (

                <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' id={item.id}>
                  <div className="card p-0 overflow-hidden h-100 shadow d-flex mb-4 ">
                    <img src={item.img} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.text}</p>
                      <p>{item.button}</p>
                      {/* <div className="accordion containeres" id={"item.id"}>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id={"item.id"}>
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls={item.id}>
                              Read More
                            </button>
                          </h2>
                          <div id={item.id} class="accordion-collapse collapse show" aria-labelledby={"item.id"} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                            </div>
                          </div></div>
                      </div> */}
                      
                    </div>
                  </div>
                </div>)
            })
            }

          </div>
        </div>
      </div>
    </>
  )


}
export default Landing;