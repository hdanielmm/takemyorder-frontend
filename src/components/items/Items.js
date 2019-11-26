import React from 'react';
import Img from 'react-image';
import './style.css';

const Items = ({ items, itemsList, addItem, deleteItem, confirmOrder }) => {

  const handleAddItem = (item) => {
    addItem(item);
  }

  const handleDeleteItem = (item) => {
    deleteItem(item);
  }

  const handleConfirmOrder = () => {
    const order = listSelectedItems();
    console.log('order', order);
    order.length > 0
      ? alert("We have taken your order successfully.") 
      : alert("Please, choose one or more items before confirm your order.");

    confirmOrder(order);
  }

  const countItemsSelected = (id) => {
    const count = items.filter(i => i.id === id);
    return count.length;
  }

  const listSelectedItems = () => {

    function compare(a, b) {
      const idA = a.id;
      const idB = b.id;

      let comparison = 0;
      if (idA > idB) {
        comparison = 1;
      } else if (idA < idB) {
        comparison = -1;
      }
      return comparison;
    }

    const unrepitedItems = items.slice().sort(compare);
    unrepitedItems.filter(item => {
      const first = unrepitedItems.indexOf(item);
      const last = unrepitedItems.lastIndexOf(item);
      if (first != last) { unrepitedItems.splice(first, last - first) }
    });
    const names = unrepitedItems.map(i => {
      return (
        {
          id: i.id,
          name: i.name,
          quantity: countItemsSelected(i.id)
        }
      );
    });
    console.log("names", names);
    // console.log('unrepitedItems', unrepitedItems);
    // return unrepitedItems;
    return names;
  }
  
  return (
    <>
      <h1>TMO</h1>
      <div>
        <h3>My order:</h3>
        {listSelectedItems().map(item =>
          <p key={item.id}>{item.name} - {countItemsSelected(item.id)}</p>
        )}
        <button className='confirm-button' onClick={handleConfirmOrder}>Confirm order</button>
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
            <div>{countItemsSelected(item.id)}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Items;