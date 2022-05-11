import React from 'react';
import { useDispatch } from 'react-redux';

import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { AppDispatch } from '../..';

import { setSeachKeyword } from '../../redux/actions';
import './search.scss';

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Handle input change
  const handleInputChange = (e: any) => {
    dispatch(setSeachKeyword(e.target.value));
  };

  return (
    <div className="search-box">
      <div className="search-box__wrapper">
        <Input onChange={handleInputChange} placeholder="Search" />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
