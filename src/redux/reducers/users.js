import { normalizedUsers } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

export default (users = defaultUsers, action) => {
  const { type, payload, userId } = action;

  switch (type) {
    case ADDREVIEW:
      return {
        ...users,
        [userId]: {
          id: userId,
          name: payload.review.username
        }
      };
    default:
      return users;
  }
};
