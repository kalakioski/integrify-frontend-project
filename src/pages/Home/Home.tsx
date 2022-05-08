import React from 'react';
import { Button } from '@mui/material';

import Appbar from '../../components/Appbar/Appbar';
import Sidebar from '../../components/Sidebar/Sidebar';

import './home.scss';

const Home = () => {
	const [drawerState, setDrawerState] = React.useState(false);

	return (
		<div className="home">
			{/* appbar component */}
			<Appbar />
			{/* Sidebar */}
			Home Page
			<Button color="primary">Hello</Button>
		</div>
	);
};

export default Home;
