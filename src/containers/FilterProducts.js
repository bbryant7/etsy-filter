import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../actionTypes/actions";

class FilterProducts extends Component {
  createFilterRadio(value, text) {
    return (
      <button
        key={value}
        className={this.props.filter === value ? "active" : "inactive"}
        onClick={event => this.props.filterProducts(value)}
      >
        {text}
      </button>
    );
  }
  render() {
    const filterOptions = [
      ["all", "Show all"],
      ["underTwenty", "Show under $20"],
      ["overTwenty", "Show over $20"]
    ];

    return (
      <div className="filterProducts">
        {filterOptions.map(option =>
          this.createFilterRadio.apply(this, option)
        )}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return { filter: state.filter };
};

const mapDispatchToProps = function(dispatch) {
  return {
    filterProducts: function(filter) {
      dispatch(filterProducts(filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterProducts);
