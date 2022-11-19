import React, { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface IPropsOrders {
    icon:string;
    title:string;
    orders:Order[];
}


export function OrdersBoards({icon, title, orders}:IPropsOrders){
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    function handleOpenModal(){
        setIsModalVisible(true);
    }

    return(
        <>
            <Board>
                <OrderModal visible={isModalVisible} />
                <header>
                    <span>{icon}</span>
                    <span>{title}</span>
                    <span>{orders.length}</span>
                </header>

                {orders?.length > 0 && (
                    <OrdersContainer>
                        {orders?.map((order) =>(
                            <button type='button' key={order._id} onClick={handleOpenModal}>
                                <strong>Mesa {order.table}</strong>
                                <span>{order.products.length} itens</span>
                            </button>
                        ))}

                    </OrdersContainer>
                )}
            </Board>
        </>
    );
}
