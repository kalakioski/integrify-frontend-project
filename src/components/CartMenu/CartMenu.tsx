import React from 'react';
import { useDispatch } from 'react-redux';

import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';

import { removeCountryFromCart } from '../../redux/actions';
import './cartmenu.scss';

type CartMenuProps = {
  cart: {}[];
  onClick: Function;
  menuOpen: boolean;
  anchorEl: null | HTMLElement;
};

const CartMenu = ({ cart, onClick, menuOpen, anchorEl }: CartMenuProps) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    onClick();
  };

  return (
    <div className="cart-menu">
      <Menu
        className="cart-menu__menu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleClose}
      >
        <h2>Cart Items</h2>
        {/* items */}
        <div className="cart-menu__menu-list">
          {/* Each country item */}

          {cart.length == 0 && (
            <div className="cart-menu__empty">
              <h3>No items in the cart</h3>
            </div>
          )}

          {cart &&
            cart.map((country: any) => (
              <div className="cart-menu__item">
                <img src={country.flag} alt={country.name} />
                <h3>{country.name}</h3>
                <DeleteIcon
                  onClick={() => dispatch(removeCountryFromCart(country))}
                />
              </div>
            ))}
        </div>
      </Menu>
    </div>
  );
};

export default CartMenu;
