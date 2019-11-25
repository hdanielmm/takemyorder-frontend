import { connect } from 'react-redux';
import { createItem2 } from '../actions/createItem';

import NewProduct from '../components/newProduct/NewProduct';

const mapStateToProps = state => {
  return {
    items: state.order.items,
    itemsList: state.itemsList
  };
};

const mapDispatchToProps = dispatch => ({
  createItem: (name, price, image) => dispatch(createItem2(name, price, image))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);