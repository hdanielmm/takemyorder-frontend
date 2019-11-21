import React, { Component, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'react-image';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border: 2px solid #333;
  box-sizing: border-box;
  margin: 10px;
  // min-width: 280px;
  padding: 0 20px;
  // width: 30%;
  background-color: #fff;
  align-items: center;
`;

const Image = styled.div`
  width: auto;
  height: 600;
  background-color: #a7a55b;
  // margin: 0 auto;
`;

const Description = styled.div`
  // background-color: #d3e1e5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = ({ image_url, name, tagline }) => {
  console.log({ image_url })
  return (
    <Container>
      <Image>
        <Img src={image_url} />
      </Image>
      <Description>
        <h3>{name}</h3>
        <p>{tagline}</p>
      </Description>
      <div>
        <button >Agregar</button>
        <button >Quitar</button>
      </div>
    </Container>
  )
}

export default Item;