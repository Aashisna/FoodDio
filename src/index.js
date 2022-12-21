import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Style.css';
import banner1 from './img/banner1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import {QueryClient,QueryClientProvider} from 'react-query'
import Landing from './Landing';
import Todo from './Todo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import Routing from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <Routing/>
</QueryClientProvider>
  </React.StrictMode>

);

reportWebVitals();
