import styled from 'styled-components';

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4.5px);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalBody = styled.div`
    background: #fff;
    width: 480px;
    border-radius: 8px;
    padding: 32px;
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        strong {
            font-size: 24px;
        }
        button {
            background: transparent;
            border: 0;
            line-height: 0;
        }
    }
    .status-container {
        margin-top: 32px;
        small {
            font-size: 14px;
            opacity: 0.8;
        }
        div {
            display: flex;
            gap: 8px;
            margin-top: 8px;
            align-items: center;
        }
    }
`;


export const OrderDetails = styled.div`
    margin-top: 32px;
    > strong {
        font-size: 14px;
        opacity: 0.8;
        font-weight: 500;
    }
    .order-itens {
        margin-top: 16px;
        .item {
            display: flex;
            & + .item {
                margin-top: 16px;
            }
            img {
                border-radius: 16px;
            }
            .quantity {
                font-size: 14px;
                color: #666;
                margin-left: 12px;
                display: block;
                min-width: 20px;
            }
            .product-details {
                display:flex ;
                margin-left: 4px;
                gap:8px;
                strong {
                    display: block;
                    margin-bottom: 4px;

                }
                span {
                    color: #666;
                    font-size: 14px;
                }
            }
        }
    }
    .total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 24px;
        > span {
            opacity: 0.8;
            font-size: 14px;
            font-weight: 500;
        }
    }
`;


export const Actions = styled.footer`
    display:flex;
    flex-direction:column ;

    button:disabled{
            opacity:0.5;
            cursor:not-allowed;
        }

    .primary {
        background:#333333 ;
        border-radius:48px;
        color:#fff;
        border: 0;
        padding:12px  24px;
        display:flex ;
        align-items:center ;
        justify-content:center ;
        gap:8px;
        margin-top:8px;

    }

    .secondary {
        padding:14px 24px;
        color: #d73835;
        font-weight:bold ;
        border:0 ;
        background-color:transparent ;
        margin-top:12px;

        &:hover{
            background:#333333 ;
            color: #fff;
            font-weight:bold ;
            border:0 ;
        }

    }

`;
