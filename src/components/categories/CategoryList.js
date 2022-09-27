import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";

class CategoryList extends Component {
  //uygulama açıldığında kategorileri çekmek için
  componentDidMount() {
    this.props.actions.getCategories();
  }
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
  };

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">
            Total Categories {this.props.categories.length}
          </Badge>
        </h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h5> Seçili Kategori : {this.props.currentCategory.name} </h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}
//Aksiyonu proplara baglama
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
