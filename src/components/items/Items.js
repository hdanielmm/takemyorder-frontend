import React from 'react';
import Img from 'react-image';
import '../items/itemsStyle.css';
// import {hoverable} from 'materialize-css/dist/css/materialize.min.css';

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
      <h1>Our drinks</h1>

      <div className='container'>
        {itemsList.map(item =>
          <div className='card hoverable' key={item.id}>
            <Img src={item.image_url} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.tagline}</p>
            </div>
            <div className='add-remove'>
              <button className="btn" onClick={() => handleAddItem(item)}>Add</button>
              <button className="btn" onClick={() => handleDeleteItem(item)}>Remove</button>
              <div className='counterItmes'>{countItemsSelected(item.id)}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Items;