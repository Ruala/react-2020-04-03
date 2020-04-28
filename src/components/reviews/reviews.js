import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Review from './review';
import { Col, Row } from 'antd';
import ReviewForm from './review-form';

import { reviewsListSelector } from '../../redux/selectors';

function Reviews({ reviews, restaurantId }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review {...review} key={review.id} />
        ))}
        <ReviewForm restaurantId={restaurantId} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default connect(state => ({
  reviews: reviewsListSelector(state)
}))(Reviews);
