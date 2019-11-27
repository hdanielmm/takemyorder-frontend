import React from 'react'
import './style.css';


const Tables = ({ items, itemsList, confirmOrder }) => {

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

  let orderId = 0;
  /*****************
   * listSelectedItems
   */
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
          orderId: orderId++,
          id: i.id,
          image: i.image_url,
          name: i.name,
          quantity: countItemsSelected(i.id)
        }
      );
    });
    console.log("names", names);
    return names;
  }
  // End listSelectedItems

  return (
    <div>
      <h3>My order:</h3>
      {listSelectedItems().map(item =>
        <p key={item.id}>{item.name} - {countItemsSelected(item.id)}</p>
      )}
      <button className='confirm-button' onClick={handleConfirmOrder}>Confirm order</button>
    </div>
  )
}

export default Tables;