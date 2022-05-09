import React from 'react';
import { useDispatch } from 'react-redux';

import Appbar from '../../components/Appbar/Appbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import CountryList from '../../components/CountryList/CountryList';

import { fetchAllCountries } from '../../redux/actions';

import './home.scss';
import { AppDispatch } from '../..';

const Home = () => {
  const [drawerState, setDrawerState] = React.useState(false);

  // Initialize dispatch
  const dispatch = useDispatch<AppDispatch>();

  // Dispatch fetchAllCountries when page loads
  React.useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

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
      {/* Country list container */}
      <CountryList />
    </div>
  );
};

export default Home;
