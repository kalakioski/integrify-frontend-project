import React from 'react';
import { useSelector } from 'react-redux';

import Search from '../Search/Search';
import CartMenu from '../CartMenu/CartMenu';
import { AppState } from '../../types';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

import './appbar.scss';

interface AppbarProps {
  onClick: Function;
  drawerState: boolean;
}

const Appbar = (props: AppbarProps) => {
  const { onClick, drawerState } = props;

  // Cart
  const cart = useSelector((state: AppState) => state.cartReducer.cart);

  const onDrawerClick = () => {
    onClick(!drawerState);
  };

  //Cart menu open state and functions
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleCartMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="appbar">
      <div className="appbar__content">
        {/* Logo area */}
        <div className="appbar__content-left">
          <img
            src={process.env.PUBLIC_URL + '/images/LOGO.svg'}
            alt="country app logo"
          />
        </div>
        {/* Search box area */}
        <div className="appbar__content-search">
          {/* Search component */}
          <Search />
        </div>
        {/* right side area */}
        <div className="appbar__content-right">
          {/* Cart menu */}
          <CartMenu
            cart={cart}
            onClick={handleCartMenuClose}
            menuOpen={menuOpen}
            anchorEl={anchorEl}
          />
          <div className="appbar__content-cart" onClick={handleCartMenuClick}>
            <ShoppingCartIcon />
            {/* cart counter component */}
            <div className="appbar__content-cart-counter">
              {cart && cart.length}
            </div>
          </div>
          {/* menu icon */}
          <MenuIcon onClick={onDrawerClick} />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
