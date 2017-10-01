import React, {Component} from 'react';
import {connect} from 'react-redux'

import Product from "../components/Product";


  class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="ProductList">
        {products.map(product => (
          <div key={product.listing_id} >
          <Product product={product} />
          </div>
        ))}
      </div>
    );
  }
}
        // Create a dynamically populated list of `<Product />` components
        // Each `<Product />` component should have a single object from the `products` state property (array)
        // applied to the component as a `product` property




// Using the `mapStateToProps` function, filter the array stored in the
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default
const mapStateToProps = function(state) {
    let products;
    // complete the `if else` statement including conditions and `products` value
    if (state.filter === "underTwenty") {
      products = state.products.filter(p => p.price<20)
    } else if ( state.filter ==="overTwenty") {
      products = state.products.filter(p => p.price>20)
    } else {
      products = state.products;
    }

    return {products: products}
}


export default connect(mapStateToProps)(ProductList);
