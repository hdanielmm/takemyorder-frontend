import { connect } from 'react-redux';
import { addItem } from '../actions/addItem';
import { deleteItem } from '../actions/deleteItem';
import { confirmOrder } from '../actions/confirmOrder';
import Items from '../components/items/Items';

const mapStateToProps = state => {
  return {
    items: state.order.items,
    itemsList: state.itemsList
  };
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  deleteItem: item => dispatch(deleteItem(item)),
  confirmOrder: order => dispatch(confirmOrder(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);