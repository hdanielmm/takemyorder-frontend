import React from 'react'
import Img from 'react-image';
// import './ordersStyle.css';


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
      if (first !== last) { return unrepitedItems.splice(first, last - first) }
    });
    const names = unrepitedItems.map(i => {
      return (
        {
          orderId: orderId++,
          id: i.id,
          image: i.image_url,
          name: i.name,
          quantity: countItemsSelected(i.id),
        }
      );
    });
    console.log("names", names);
    return names;
  }
  // End listSelectedItems

  return (

    <>
      <h1>My order</h1>

      {listSelectedItems().length > 0
        ? <button
          className='btn confirm-button'
          onClick={handleConfirmOrder}
        >
          Confirm
          </button>
        : "You have not selected any items yet."
      }

      <div className='container'>
        {listSelectedItems().map(item =>
          <div className='card hoverable' key={item.id}>
            <Img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
            </div>
            <p>{countItemsSelected(item.id)}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Tables;