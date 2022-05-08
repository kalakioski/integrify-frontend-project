import React from 'react';
import { Button } from '@mui/material';

import Appbar from '../../components/Appbar/Appbar';
import Sidebar from '../../components/Sidebar/Sidebar';

import './home.scss';

const Home = () => {
	const [drawerState, setDrawerState] = React.useState(false);

	// handle drawer state
	const handleDrawerState = (state: boolean) => {
		setDrawerState(state);
	};

	return (
		<div className="home">
			{/* appbar component */}
			<Appbar onClick={handleDrawerState} drawerState={drawerState} />
			{/* Sidebar */}
			<Sidebar onClick={handleDrawerState} drawerState={drawerState} />
			Home Page
			<Button color="primary">Hello</Button>
		</div>
	);
};

export default Home;
