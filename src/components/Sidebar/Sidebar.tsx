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

  // Switch primary color
  const switchPrimaryColor = (primary: string, primaryHover: string) => {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty(
      '--primary-color-hover',
      primaryHover
    );
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
              <li onClick={() => switchPrimaryColor('#2196f3', '#0043c0')}>
                <h2>Blue</h2>
                <span className="sidebar__color-box blue"></span>
              </li>
              <li onClick={() => switchPrimaryColor('#f06292', '#ad194b')}>
                <h2>Red</h2>
                <span className="sidebar__color-box red"></span>
              </li>
              <li onClick={() => switchPrimaryColor('#66bb6a', '#038109')}>
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
