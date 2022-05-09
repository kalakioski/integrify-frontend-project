import {
  ADD_COUNTRY_TO_CART,
  REMOVE_COUNTRY_FROM_CART,
  CartActions,
  CartReducerState,
} from '../../types';

// Initial state

const InitialState: CartReducerState = {
  cart: [],
};

// Cart reducer function

export default function cartReducer(
  state: CartReducerState = InitialState,
  action: any
): CartReducerState {
  switch (action.type) {
    case 'ADD_COUNTRY_TO_CART': {
      const country = action.payload;
      return {
        ...state,
        cart: [...state.cart, country],
      };
    }

    case 'REMOVE_COUNTRY_FROM_CART': {
      const payloadCountry = action.payload;
      const tempCart = state.cart.filter(
        (country) => country !== payloadCountry
      );
      return {
        ...state,
        cart: [...tempCart],
      };
    }

    default:
      return state;
  }
}
