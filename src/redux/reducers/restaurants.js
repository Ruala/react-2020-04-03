import { normalizedRestaurants, normalizedReviews } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  acc[restaurant.id] = restaurant;
  return acc;
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload, reviewId } = action;

  switch (type) {
    case ADDREVIEW:
      return {
        ...restaurants,
        [payload.restaurantId]: {
          ...restaurants[payload.restaurantId],
          reviews: [...restaurants[payload.restaurantId].reviews, reviewId]
        }
      };
    default:
      return restaurants;
  }
};
