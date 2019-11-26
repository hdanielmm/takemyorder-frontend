import React from 'react'
import table from 'react-bootstrap/Table';
import './style.css';


const Tables = ({ order }) => {

  console.log({ order });

  return (
    <>
      <h2>My table</h2>
      <table>
        <thead>
          <tr>
            <th>Order number</th>
            {order.map(item => (
              <th>{item.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {order.map(item => (
              <td>{item.quantity}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Tables;