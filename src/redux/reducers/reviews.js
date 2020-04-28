import { normalizedReviews } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce((acc, review) => {
  acc[review.id] = review;
  return acc;
}, {});

export default (reviews = defaultReviews, action) => {
  const { type, payload, reviewId, userId } = action;

  switch (type) {
    case ADDREVIEW:
      return {
        ...reviews,
        [reviewId]: {
          id: reviewId,
          userId: userId,
          text: payload.review.text,
          rating: payload.review.rating
        }
      };
    default:
      return reviews;
  }
};
