import React from 'react';
import { Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './sidebar.scss';

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
				<div className="sidebar__drawer-content">
					<CloseIcon className="sidebar__close-menu" onClick={onDrawerClose} />
					{/* Themes and other things */}
					<div className="sidebar__menuitem">
						<h2>Theme</h2>
						<ul>
							<li>
								<h2>Blue</h2>
								<span className="sidebar__color-box blue"></span>
							</li>
							<li>
								<h2>Red</h2>
								<span className="sidebar__color-box red"></span>
							</li>
							<li>
								<h2>Green</h2>
								<span className="sidebar__color-box green"></span>
							</li>
						</ul>
					</div>
				</div>
			</Drawer>
		</div>
	);
};

export default Sidebar;
