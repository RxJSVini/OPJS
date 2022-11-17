import React from 'react';
import logo from '../../assets/images/logo.svg';
import {  Container } from './styles';

export function Header(){
    return(
        <Container>
            <header>
                <div className='page-details'>
                    <h1>Pedidos</h1>
                    <h2>Acompanhe os pedidos dos clientes</h2>
                </div>
                <img src={logo} alt='WAITTERAPP'/>
            </header>
        </Container>

    );
}
