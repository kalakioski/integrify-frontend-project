import {
	FETCH_COUNTRIES,
	FETCH_COUNTRIES_FAILURE,
	FETCH_COUNTRIES_SUCCESS,
	FetchAllCountriesAction,
} from '../../types';
// fetch all countries

export function fetchAllCountries(): FetchAllCountriesAction {
	return {
		type: FETCH_COUNTRIES,
	};
}

// fetch all countries success
export function fetchAllCountriesSuccess(): any {
	return {
		type: FETCH_COUNTRIES_SUCCESS,
	};
}
