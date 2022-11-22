import React, {  useEffect } from 'react';
import { Order } from '../../types/Order';
import { CloseIcon } from '../CloseIcon';
import { Overlay, ModalBody, OrderDetails, Actions } from './styles';
import { useFormaPriceLocal } from '../../utils/priceFormat';
interface OrderModalProps {
    visible:boolean;
    order:Order | null;
    onClose:() => void;
}

export function OrderModal({ visible,  order , onClose}: OrderModalProps){


    if(!visible || !order){
        return null;
    }

    let total = 0;
    order.products.forEach(({product, quantity}) =>{
        total += product.price * quantity;
    });


    return(
        <React.Fragment>
            <Overlay>
                <ModalBody>
                    <header>
                        <strong>Mesa {order?.table}</strong>
                        <button type='button' onClick={onClose}>
                            <CloseIcon/>
                        </button>
                    </header>
                    <div className='status-container'>
                        <small>Status do Pedido</small>
                        <div>
                            <span>
                                {order?.status ==='DONE' && '✅'}
                                {order?.status ==='IN_PRODUCTION' && '👨‍🍳'}
                                {order?.status ==='WAITING' && '🕓'}
                            </span>
                            <strong>
                                {order?.status ==='DONE' && 'Pronto!'}
                                {order?.status ==='IN_PRODUCTION' && 'Em preparo'}
                                {order?.status ==='WAITING' && 'Na fila de espera'}
                            </strong>
                        </div>

                    </div>
                    <OrderDetails>
                        <strong>Itens</strong>
                        <div className="order-itens">
                            {order.products.map(({ _id, product, quantity}) =>(
                                <div  className='item'  key={_id}>
                                    <img
                                        src={`http://localhost:3001/uploads/${product.imagePath}`}
                                        alt={product.name}
                                        width='56'
                                        height='28.51'
                                    />
                                    <div className='product-details'>
                                        <span className='quantity'>{quantity}x</span><br/>
                                        <span>{product.name}</span><br/>
                                        <span>{useFormaPriceLocal(product.price)}</span>
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className="total">
                            <span>Total</span>
                            <strong>{useFormaPriceLocal(total)}</strong>
                        </div>

                    </OrderDetails>
                    <Actions>
                        <button type='button' className='primary'>
                            <span>👨‍🍳</span>
                            <span>Iniciar Produção</span>
                        </button>
                        <button type='button' className='secondary' onClick={onClose}>
                            Cancelar Pedido
                        </button>
                    </Actions>
                </ModalBody>
            </Overlay>
        </React.Fragment>
    );
}
