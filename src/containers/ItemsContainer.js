import { connect } from 'react-redux';
import { addItem } from '../actions/addItem';
import Items from '../components/Items';

const mapStateToProps = state => {
  return {
    items: state.order.items,
    itemsList: state.itemsList
  };
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);