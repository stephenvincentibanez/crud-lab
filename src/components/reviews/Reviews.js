import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    let filtered = this.props.reviews.filter(r => r.restaurantId === this.props.restaurant.id)
    return filtered.map(r => {return <Review key={r.id} review={r} deleteReview={this.props.deleteReview}/>})
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;