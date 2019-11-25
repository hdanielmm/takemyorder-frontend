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

  const amount = (id) => {
    console.log("entré")
    const count = items.filter(i => i.id === id);
    return count.length;
  }

  console.log({ items })

  return (
    <>
      <h1>TMO</h1>
      <div>
        Order: {items.map(item =>
          <p>{item.name} - {amount(item.id)}</p>
        )}
      </div>
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
            <div>{amount(item.id)}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Items;