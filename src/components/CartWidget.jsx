import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
<<<<<<< HEAD
import styled from 'styled-components';

const Cart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
`;
const CartWidget = () => {
    return (
        <Cart>
            <AiOutlineShoppingCart/>
            2
        </Cart>
=======


const CartWidget = () => {
    return (
        <div className='cart'>
            <AiOutlineShoppingCart/>
            2
        </div>
>>>>>>> 6e52f46 (PreEntrega2+Secreti)
    )
}

export default CartWidget