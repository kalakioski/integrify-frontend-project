import {
	CountryReducerState,
	FETCH_COUNTRIES,
	FETCH_COUNTRIES_FAILURE,
	FETCH_COUNTRIES_SUCCESS,
} from '../../types';

const InitialState: CountryReducerState = {
	countries: [],
	isLoading: false,
	error: '',
};

export default function countryReducer(
	state: CountryReducerState = InitialState,
	action: any
) {
	switch (action.type) {
		// fetch country, loading true
		case FETCH_COUNTRIES:
			return {
				...state,
				isLoading: true,
			};

		// if fetching is successful
		case FETCH_COUNTRIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				countries: action.payload,
				error: '',
			};

		// if fetching has any errors
		case FETCH_COUNTRIES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		default:
			return state;
	}
}