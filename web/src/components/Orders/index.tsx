import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import {  OrdersBoards } from '../OrdersBoards';
import { Order } from '../../types/Order';
import { api  } from '../../services/api';
import socketio, {  Socket } from 'socket.io-client';

export function Orders(){

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() =>{
        const socket = socketio('http://localhost:3001', {
            transports:['websocket']
        });

        socket.on('orders@new', (orders) =>{
            setOrders(prevState=> prevState.concat(orders));
        });

    }, []);

    useEffect(() =>{
        api.get('/orders')
            .then(({ data }) =>{
                setOrders(data);
            })
            .catch((err) =>{
                return err;
            });

    }, [orders]);


    function handleOrderStatusChange(orderId:string, status:  Order['status']){
        setOrders((prevState) => prevState.map((order) =>(
            order._id === orderId
                ? {... order, status}
                : order
        )));
    }

    function handleCancelOrder(orderId:string){
        setOrders((prevState) => prevState.filter(order => order._id !== orderId));
    }


    const waiting = orders.filter((orders) => orders.status === 'WAITING');
    const in_production = orders.filter((orders) => orders.status === 'IN_PRODUCTION');
    const done = orders.filter((orders) => orders.status === 'DONE');


    return(
        <React.Fragment>
            <Container>
                <OrdersBoards
                    icon='🕒'
                    title='Fila de Espera'
                    order={waiting}
                    onCancelOrder={handleCancelOrder}
                    onChangeOrderStatus={handleOrderStatusChange}

                />
                <OrdersBoards
                    icon='👨‍🍳'
                    title='Em preparação'
                    order={in_production}
                    onCancelOrder={handleCancelOrder}
                    onChangeOrderStatus={handleOrderStatusChange}

                />
                <OrdersBoards
                    icon='Pronto'
                    title='✅'
                    order={done}
                    onCancelOrder={handleCancelOrder}
                    onChangeOrderStatus={handleOrderStatusChange}
                />

            </Container>

        </React.Fragment>
    );
}
