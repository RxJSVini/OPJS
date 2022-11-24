import React, { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

interface IPropsOrders {
    icon:string;
    title:string;
    order:Order[];
    onCancelOrder:(orderId:string) =>void;
    onChangeOrderStatus:(orderId:string, status:Order['status']) => void;
}

export function OrdersBoards({icon, title, order, onCancelOrder, onChangeOrderStatus }:IPropsOrders){
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function handleOpenModal(order:Order){
        setIsModalVisible(true);
        setSelectedOrder(order);
    }

    function handleCloseModal(){
        setIsModalVisible(false);
        setSelectedOrder(null);
    }


    async function handleCancelOrder(){
        setIsLoading(true);
        if(!selectedOrder?._id) return;

        await new Promise(resolve => setTimeout(resolve, 3000));
        await api.delete(`/orders/${selectedOrder?._id}`);
        setIsLoading(false);
        setIsModalVisible(false);
        toast.success(`O pedido da mesa ${selectedOrder.table} foi cancelado!`);
        onCancelOrder(selectedOrder._id);

    }

    async function handleChangeOrderStatus(){
        setIsLoading(true);
        const status = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION':'DONE';
        await new Promise(resolve => setTimeout(resolve, 3000));
        //Quando o nome da chave é o mesmo nome da constante na passagem de dados para o axios, o proprio javascript faz a atribuição de dados exemplo como se oque estamos passando abaixo fosse {status:status}
        await api.patch(`/orders/${selectedOrder?._id}`, { status });
        toast.success(`O pedido da mesa ${selectedOrder?.table} teve seu status alterado.`);
        onChangeOrderStatus(selectedOrder!._id, status);
        setIsLoading(false);
        setIsModalVisible(false);

    }

    return(
        <React.Fragment>
            <Board>
                <OrderModal
                    visible={isModalVisible}
                    order={selectedOrder}
                    onClose={handleCloseModal}
                    onCancelOrder={handleCancelOrder}
                    isLoading={isLoading}
                    onChangeOrderStatus={handleChangeOrderStatus}

                />
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
