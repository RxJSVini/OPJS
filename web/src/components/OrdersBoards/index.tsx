import React, { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface IPropsOrders {
    icon:string;
    title:string;
    order:Order[];
}




export function OrdersBoards({icon, title, order}:IPropsOrders){
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    function handleOpenModal(order:Order){
        setIsModalVisible(true);
        setSelectedOrder(order);
    }

    function handleCloseModal(){
        setIsModalVisible(false);
        setSelectedOrder(null);
    }

    return(
        <React.Fragment>
            <Board>
                <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal}/>
                <header>
                    <span>{icon}</span>
                    <span>{title}</span>
                    <span></span>
                </header>
                <OrdersContainer>
                    {order?.map((order) =>(
                        <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
                            <strong>Mesa {order.table}</strong>
                            <span>{order.products.length} itens</span>
                        </button>
                    ))}
                </OrdersContainer>
            </Board>
        </React.Fragment>
    );
}
