import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    const {addRestaurant, deleteRestaurant, restaurants} = this.props
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant}/>
        <Restaurants restaurants={restaurants} deleteRestaurant={deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: name => dispatch({type: 'ADD_RESTAURANT', name}),
    deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
