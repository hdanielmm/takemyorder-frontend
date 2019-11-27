import React from 'react';
import Img from 'react-image';
import './style.css';

const Items = ({ items, itemsList, addItem, deleteItem }) => {

  const handleAddItem = (item) => {
    addItem(item);
  }

  const handleDeleteItem = (item) => {
    deleteItem(item);
  }

  const countItemsSelected = (id) => {
    const count = items.filter(i => i.id === id);
    return count.length;
  }

  return (
    <>
      <h1>TMO</h1>

      <div className='container'>
        {itemsList.map(item =>
          <div className='card' key={item.id}>
            <Img src={item.image_url} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.tagline}</p>
            </div>
            <div>
              <button onClick={() => handleAddItem(item)}>Add</button>
              <button onClick={() => handleDeleteItem(item)}>Remove</button>
            </div>
            <div>{countItemsSelected(item.id)}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Items;