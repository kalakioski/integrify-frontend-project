import React from 'react';

import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './search.scss';

const Search = () => {
	return (
		<div className="search-box">
			<div className="search-box__wrapper">
				<Input placeholder="Search" />
				<SearchIcon />
			</div>
		</div>
	);
};

export default Search;
