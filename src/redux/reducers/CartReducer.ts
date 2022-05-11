import { CartReducerState } from '../../types';

// Initial state
const cartFormLocal = localStorage.getItem('cart');
let initialCart: [] = [];
if (cartFormLocal) {
  initialCart = JSON.parse(cartFormLocal);
}

const InitialState: CartReducerState = {
  cart: initialCart,
};

// Cart reducer function

export default function cartReducer(
  state: CartReducerState = InitialState,
  action: any
): CartReducerState {
  switch (action.type) {
    case 'ADD_COUNTRY_TO_CART': {
      const country = action.payload;

      //save cart country to local storage
      const cartCountry = [...state.cart, country];
      localStorage.setItem('cart', JSON.stringify(cartCountry));
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
      const cartCountry = [...tempCart];
      localStorage.setItem('cart', JSON.stringify(cartCountry));
      return {
        ...state,
        cart: [...tempCart],
      };
    }

    default:
      return state;
  }
}
