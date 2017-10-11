import React, { Component } from 'react';
import ProductCard from './ProductCard';


export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <ProductCard
          addToCart={this.props.addToCart}
        />
      </div>
    )
  }
}
