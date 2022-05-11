import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import './countrycard.scss';

type CountryCardProps = {
  flag: string;
  name: string;
  region: string;
  onClick: Function;
  disabled: boolean;
};

const CountryCard = ({
  flag,
  name,
  region,
  onClick,
  disabled,
}: CountryCardProps) => {
  return (
    <div className="country-card" key={name}>
      <div className="country-card__container">
        <Link to={`/country/${name}`}>
          <div className="country-card__wrapper">
            <div className="country-card__innerwrapper">
              <img src={flag} alt={name} />
            </div>
            <div className="country-card__innerwrapper">
              <h2 className="country-card__name">{name}</h2>
            </div>
            <div className="country-card__innerwrapper">
              <h3 className="country-card__region">{region}</h3>
            </div>
          </div>
        </Link>
        <div>
          <Button
            className="button"
            disabled={disabled}
            onClick={() => onClick()}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
