import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../..';

import { fetchAllCountries, addCountryToCart } from '../../redux/actions';
import { AppState } from '../../types';

import CountryCard from '../CountryCard/CountryCard';

const CountryList = () => {
  // Get all countries from redux state
  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  );
  const isLoading = useSelector(
    (state: AppState) => state.countryReducer.isLoading
  );

  // Cart state
  const cart = useSelector((state: AppState) => state.cartReducer.cart);

  // Filter countries
  const [filteredCountries, setFilteredCountries] = React.useState(countries);

  React.useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  // Filter country by keyword
  const searchKeyword = useSelector(
    (state: AppState) => state.uiReducer.searchKeyword
  );
  React.useEffect(() => {
    const tempCountries: [] = countries.filter((country: any) =>
      country.name.toLowerCase().includes(searchKeyword?.toLowerCase())
    ) as [];
    setFilteredCountries(tempCountries);
  }, [searchKeyword, countries]);

  // Initialize dispatch
  const dispatch = useDispatch<AppDispatch>();

  // Dispatch fetchAllCountries when page loads
  React.useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  return (
    <div className="country-list">
      {/* Sorting */}
      <div className="country-list__sort"></div>

      {/* Country list */}
      <div className="country-list__cards">
        {isLoading && <h2>Loading...</h2>}

        {!isLoading &&
          filteredCountries &&
          filteredCountries.map((country) => (
            <CountryCard
              key={country.name}
              {...country}
              disabled={cart.includes(country)}
              onClick={() => dispatch(addCountryToCart(country))}
            />
          ))}
      </div>
    </div>
  );
};

export default CountryList;
