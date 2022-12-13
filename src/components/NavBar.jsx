import React from 'react'
<<<<<<< HEAD
import { Menu, NavContainer, MenuItems, IconNav } from './NavBarElements'
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <>
        <NavContainer>
            <IconNav>
                DigitalCelu
            </IconNav>
            <Menu>
                <MenuItems>
                <a href="">Inicio</a>
                </MenuItems>
                <MenuItems>
                <a href="">Celulares</a>
                </MenuItems>
                <MenuItems>
                <a href="">Nosotros</a>
                </MenuItems>
                <MenuItems>
                <a href="">Contacto</a>
                </MenuItems>
            </Menu>
            <CartWidget/>
        </NavContainer>
=======
import {Link} from 'react-router-dom'
import { AiFillPhone } from "react-icons/ai";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
        <nav className='containerNavBar'>
            <Link to='/DigitalCelu/' className='iconNavBar'>
                <AiFillPhone/>
                DigitalCelu
            </Link>
            <div className='linkNavBar'>
                    <Link to={'/DigitalCelu/'}>Inicio</Link>
                    <Link to={'/DigitalCelu/category/Samsung/'}>Samsung</Link>
                    <Link to={'/DigitalCelu/category/Motorola/'}>Motorola</Link>
                    <Link to={'/DigitalCelu/category/Iphone/'}>Iphone</Link>
                    <Link to={'/DigitalCelu/category/Tablet/'}>Tablet</Link>
            </div>
            <div>
            <CartWidget/>
            </div>
        </nav>
>>>>>>> 6e52f46 (PreEntrega2+Secreti)
        </>
    )
}

export default NavBar