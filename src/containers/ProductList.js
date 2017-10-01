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

const mapStateToProps = function(state) {
    let products;
  
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
