import React from 'react'
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
        </>
    )
}

export default NavBar