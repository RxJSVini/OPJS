import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from '../src/components/Header';
import { Orders } from './components/Orders';
import { ToastContainer } from 'react-toastify';

export default function App(){
    return(
        <>
            <ToastContainer position='bottom-center' autoClose={3000}/>
            <GlobalStyles/>
            <Header/>
            <Orders/>
        </>
    );
}
