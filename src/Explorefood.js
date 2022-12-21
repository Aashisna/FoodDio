import React from 'react'
import Explorefoodvar1 from './Explorefoodvar1'
import Data from './Data';
import { useState } from 'react';
import { useEffect } from 'react';


export default function (props) {
//     const [filter, setFilter] = useState('');

//     let dataSearch = Data.cardData.filter(item => {
//       return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter?.toString().toLowerCase())
//       )
//     });   
// useEffect(()=>{setFilter(props.filter)},[props.filter])
  return (
    <>
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
            {Data.cardData.map((item, index) => {
              return (
                <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' id={item.id}>
                  <div className="card p-0 overflow-hidden h-100 shadow d-flex mb-4 ">
                    <img src={item.img} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.text}</p>
                      <p>{item.button}</p>     
                    </div>
                  </div>
                </div>)
            })
            }

          </div>
        </div>
    </>
  )
}
