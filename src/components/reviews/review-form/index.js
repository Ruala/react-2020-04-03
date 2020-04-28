import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Rate } from 'antd';
import PropTypes from 'prop-types';

import { addReview } from '../../../redux/actions';

const AddReview = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = values => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form form={form} name="basic" onFinish={handleSubmit}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item label="Your review" name="text">
        <Input.TextArea rows={3} size="large" />
      </Form.Item>

      <Form.Item label="Your rating" name="rating">
        <Rate />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

AddReview.propTypes = {
  restaurantId: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: review => dispatch(addReview(review, ownProps.restaurantId))
});

export default connect(null, mapDispatchToProps)(AddReview);
