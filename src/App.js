import logo from './logo.svg';
import './Style.css';
import banner1 from './img/banner1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
import {QueryClient,QueryClientProvider} from 'react-query'
import Landing from './Landing';
import Todo from './Todo';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const queryClient = new QueryClient()

function App() {
  
  return (<></>);
//   <QueryClientProvider client={queryClient}>
//      <BrowserRouter>
//      <Routes>
//      <Route path="/" element={<Landing />}/>
//      <Route path="todo" element={<Todo />} />
//      <Route path="explore" element={<Explorefood />} />
//        {/* <Todo/>
//        <Landing/> */}
//   </Routes>
//   </BrowserRouter>
// </QueryClientProvider>
  
}

export default App;
