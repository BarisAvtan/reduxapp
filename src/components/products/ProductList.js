import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import { Table } from "reactstrap";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>
          <Badge color="success">{this.props.currentCategory.name}</Badge>

          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Units in Stock</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((products) => (
                <tr key = {products.id}>
                  <th scope="row">{products.id}</th>
                  <td>{products.name}</td>
                  <td>{products.unitPrice}</td>
                  <td>@{products.quantityPerUnit}</td>
                  <td>@{products.unitsInStock}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    // categories: state.categoryListReducer,
    products: state.productListReducers,
    //products: state.productsActionsReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
