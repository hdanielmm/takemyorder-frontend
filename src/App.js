import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { add } from './reducers/pedidoReducer';
import Items from './containers/Items';

const Title = styled.div`
  text-align: center;
`;

const App = (props) => {
  console.log('props', props)
  return (
    <div className='App'>
      <Title>
        <h1>TMO</h1>
      </Title>
      <Items />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cantidad: state.cantidad
  }
}

const mapDispatchToProps = dispatch => {
  add(dispatch);
}

export default App;
