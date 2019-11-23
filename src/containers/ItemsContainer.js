import { connect } from 'react-redux';
import { addItem } from '../actions/addItem';
import { deleteItem } from '../actions/deleteItem';
import Items from '../components/items/Items';

const mapStateToProps = state => {
  return {
    items: state.order.items,
    itemsList: state.itemsList
  };
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  deleteItem: item => dispatch(deleteItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);