import React, { Component } from 'react';
import Item from '../components/Item';
import styled from 'styled-components';
import { getItems } from '../utils/api';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: #eee;
`;

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      loading: true,
    };
  }

  componentDidMount() {
    getItems()
      .then(res => {
        this.setState({
          items: res.data,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  }

  renderItems = () => {
    const { items } = this.state;

    return items.map(item => {
      const { id, image_url, name, tagline } = item;
      return (
        <Item key={id}
          name={name}
          tagline={tagline}
          image_url={image_url}
        />
      );
    });
  }

  render() {
    const { loading } = this.state;
    return(
      <Container>
        {loading ? 'Loading...' : this.renderItems()}
      </Container>
    );
  }
}

export default Items;