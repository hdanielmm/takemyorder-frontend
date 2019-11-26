import { connect } from 'react-redux';
import { confirmOrder } from '../actions/confirmOrder';
import Tables from '../components/tables/Tables';

const mapStateToProps = state => {
  return {
    order: state.order.confirmedOrder
  };
};

const mapDispatchToProps = dispatch => ({
  confirmOrder: order => dispatch(confirmOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables);