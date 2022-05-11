import React from 'react';
import { useDispatch } from 'react-redux';

import CountryList from '../../components/CountryList/CountryList';

import { fetchAllCountries } from '../../redux/actions';

import { AppDispatch } from '../..';

const Home = () => {
  // Initialize dispatch
  const dispatch = useDispatch<AppDispatch>();

  // Dispatch fetchAllCountries when page loads
  React.useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  return (
    <div className="home">
      {/* Country list container */}
      <CountryList />
    </div>
  );
};

export default Home;
