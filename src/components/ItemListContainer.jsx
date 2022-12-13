<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: lightgray;
    color: black;
    font-family:'Source Sans Pro', sans-serif;
    height: 500px;
    width: 500px;
`;
const ItemListContainer = ({greeting}) => {
    return (
        <>
            <Container>
            <h2>{greeting}</h2>
            </Container>
=======
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { products } from '../mock/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([])
    const {id} = useParams()
    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
    }
    useEffect(() => {
        if (id) {
            getProducts()
            .then((res) => setProductList(res.filter(elem => elem.category === id)))
        } else{
            getProducts()
            .then((res) => setProductList(res))
        }
        
    }, [id]);

    return (
        <>
            <div className='itemListContaier'>
                <h2>{greeting}</h2>
                <ItemList productList={productList} />
            </div>
>>>>>>> 6e52f46 (PreEntrega2+Secreti)
        </>
    )
}

export default ItemListContainer