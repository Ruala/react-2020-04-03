import { createSelector } from 'reselect';

export const restaurantsSelector = state => state.restaurants;
export const productsSelector = state => state.products;
export const orderSelector = state => state.order;
export const reviewsSelector = state => state.reviews;
export const menuSelector = state => state.menu;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);
export const reviewsListSelector = createSelector(
  reviewsSelector,
  Object.values
);
export const menuListSelector = createSelector(menuSelector, Object.values);

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter(productId => order[productId] > 0)
      .map(productId => products[productId])
      .map(product => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price
      }));
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  orderProducts =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);
