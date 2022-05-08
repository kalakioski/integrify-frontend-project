import React from 'react';

import Search from '../Search/Search';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

import './appbar.scss';

const Appbar = () => {
	return (
		<div className="appbar">
			<div className="appbar__content container">
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
				{/* right side are */}
				<div className="appbar__content-right">
					{/* shopping cart related */}
					<div className="appbar__content-cart">
						<ShoppingCartIcon />
						{/* cart counter component */}
						<div className="appbar__content-cart-counter">10</div>
					</div>
					{/* menu icon */}
					<MenuIcon />
				</div>
			</div>
		</div>
	);
};

export default Appbar;
