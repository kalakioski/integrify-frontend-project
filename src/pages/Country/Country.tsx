import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { fetchAllCountries, addCountryToCart } from '../../redux/actions';
import { AppState } from '../../types';
import { AppDispatch } from '../..';

import './country.scss';

const Country = () => {
  const { name } = useParams() as any;
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();

  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  );

  const [currentCountry, setCurrentCountry] = React.useState(
    countries.filter((country) => country.name === name)[0]
  );

  const cart = useSelector((state: AppState) => state.cartReducer.cart);

  React.useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  // Update current country when we have countries data'

  React.useEffect(() => {
    setCurrentCountry(countries.filter((country) => country.name === name)[0]);
  }, [countries, name]);

  return (
    <div className="country-page">
      <div className="button__return">
        <Button className="button" onClick={() => history.push('/')}>
          <ArrowBackIosIcon />
          Return
        </Button>
      </div>
      <div className="country-page__wrapper">
        <div className="country-page__details">
          {currentCountry && currentCountry.name && (
            <>
              <div className="country-page__details-left">
                <h2 className="country-card__name">{currentCountry.name}</h2>
                <img src={currentCountry.flag} alt={currentCountry.name} />
              </div>
              <div className="country-page__details-right">
                <h2>
                  Population:{' '}
                  <span>{currentCountry.population.toLocaleString('en')}</span>
                </h2>
                <h2>
                  Region: <span>{currentCountry.region}</span>
                </h2>
                <h2>
                  Native name: <span>{currentCountry.nativeName}</span>
                </h2>
                <h2>
                  Capital: <span>{currentCountry.capital}</span>
                </h2>
                <h2>
                  Languages:{' '}
                  {currentCountry.languages.map((language) => (
                    <span key={language.name}>{language.name} &nbsp;</span>
                  ))}
                </h2>
              </div>
            </>
          )}
          <div className="button__add-to-cart">
            <Button
              className="button"
              onClick={() => dispatch(addCountryToCart(currentCountry))}
              disabled={cart.includes(currentCountry)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
