import {
  ADD_COUNTRY_TO_CART,
  REMOVE_COUNTRY_FROM_CART,
  CartActions,
  CartCountry,
} from '../../types';

// Add a country to cart
export function addCountryToCart(country: CartCountry): CartActions {
  return {
    type: ADD_COUNTRY_TO_CART,
    payload: country,
  };
}

// Remove a country from the cart
export function removeCountryFromCart(country: CartCountry): CartActions {
  return {
    type: REMOVE_COUNTRY_FROM_CART,
    payload: country,
  };
}
