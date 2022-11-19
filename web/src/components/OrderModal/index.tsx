import React, { SetStateAction } from 'react';
import { Overlay } from './styles';

interface OrderModalProps {
    visible?:boolean;
}

export function OrderModal({ visible }: OrderModalProps){

    return(
        <>
            {visible && (
                <Overlay>
                    <h1>OrderModal</h1>
                </Overlay>
            )}
        </>
    );
}
