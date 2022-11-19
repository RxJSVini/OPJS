import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from '../src/components/Header';
import { Orders } from './components/Orders';
export default function App(){
    return(
        <>
            <GlobalStyles/>
            <Header/>
            <Orders/>
        </>
    );
}
