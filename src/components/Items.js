import React from 'react';
import Img from 'react-image';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: #eee;
`;

const Items = ({ items, itemsList, addItem }) => {
  
  const handleOnClick = (item) => {
    addItem(item)
  }

  console.log({items});
  return (
    <Container>
      {itemsList.map(item =>
        <div key={item.id}>
          <Img src={item.image_url} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>{item.tagline}</p>
          </div>
          <div>
            <button onClick={()=>handleOnClick(item)}>Agregar</button>
            <button >Quitar</button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Items;