import React from 'react';
import { Drawer } from '@mui/material';

interface SidebarProps {
	onClick: Function;
	drawerState: boolean;
}

const Sidebar = (props: SidebarProps) => {
	const { onClick, drawerState } = props;

	// on drawer close
	const onDrawerClose = () => {
		onClick(!drawerState);
	};

	return (
		<div className="sidebar">
			{/* Drawer */}

			<Drawer
				anchor="right"
				open={drawerState}
				onClose={onDrawerClose}
				className="sidebar__drawer"
			>
				<h2>Drawer</h2>
				<h2>Drawer</h2>
				<h2>Drawer</h2>
			</Drawer>
		</div>
	);
};

export default Sidebar;
