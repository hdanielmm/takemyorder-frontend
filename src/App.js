import React from 'react';
import styled from 'styled-components';
import ItemsContainer from './containers/ItemsContainer';

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
      <ItemsContainer />
    </div>
  )
}

export default App;
