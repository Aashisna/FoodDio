import React from "react";
import Data from "./Data";
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
function Header(props){
    
  const navigate = useNavigate();
  const[filter, setFilter] = useState('');

  const searchText = (event) => {
    setFilter(event.target.value);
  }


  const onSearch =(e) =>{
    // console.log("search",e);
    e.preventDefault()
    props.setFilter(filter)
    //  navigate('/Landing',{filter:filter})
  };

//   let dataSearch = Data.cardData.filter(item => {
//     return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
//     )
//   });
    return(
        <>
        <header className="n">
            <div className="container">
              <div className="logo mb-3">Food<span>Dio</span></div>
              <div className="nav">
                <ul className='me-1'>
                  <li><NavLink className="" to="/">Home</NavLink></li>
                  <li><NavLink className="" to="/todo">API(React Query)</NavLink></li>
                  <li><NavLink className="" to="/explore">Explore Foods</NavLink></li>
                  <li><NavLink className="" to="/review">Review</NavLink></li>
                  {/* <li><NavLink className="" to="/">FAQ</NavLink></li> */}
                </ul>
              </div>
              <div>
                <form className="d-flex mb-3 ms-4" onSubmit={(e) => onSearch(e)} >
                  <input className="form-control me-2" type="search" placeholder="Search the food....." aria-label="Search" id="myInput" value={filter} onChange={searchText} />
                  <button className="btn btn-outline-success px-4" type="submit" >Search</button>
                   
                </form>
              </div>
            </div>
        </header>
        </>
    )
}
export default Header;