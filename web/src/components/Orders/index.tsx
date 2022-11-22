import React from 'react';
import { Container } from './styles';
import {  OrdersBoards } from '../OrdersBoards';
import { Order } from '../../types/Order';


const orders: Order[] = [
    {
        '_id': '6372e48cbcd195b0d3d0f7f3',
        'table': '1',
        'status': 'WAITING',
        'products': [
            {
                'product': {
                    'name': 'Pizza quatro queijos',
                    'imagePath': 'image-1668573345679-suco-de-laranja.png',
                    'price': 40,
                },
                'quantity': 3,
                '_id': '6372e48cbcd195b0d3d0f7f4'
            },
            {
                'product': {
                    'name': 'Coca cola',
                    'imagePath': 'image-1668573345679-suco-de-laranja.png',
                    'price': 7,
                },
                'quantity': 2,
                '_id': '6372e48cbcd195b0d3d0f7f5'
            }
        ],
    }
];

export function Orders(){
    return(
        <React.Fragment>
            <Container>
                <OrdersBoards
                    icon='🕒'
                    title='Fila de Espera'
                    order={orders}
                />
                <OrdersBoards
                    icon='👨‍🍳'
                    title='Em preparação'
                    order={[]}
                />
                <OrdersBoards
                    icon='Pronto'
                    title='✅'
                    order={[]}
                />
                <OrdersBoards
                    icon='Cancelados'
                    title='❌'
                    order={[]}
                />
            </Container>

        </React.Fragment>
    );
}
