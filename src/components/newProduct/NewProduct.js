import React, { useState } from 'react';
import './style.css';

const NewProduct = ({createItem}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  console.log({createItem})

  const handleChange = e => {
    const { name, price } = e.target;
    console.log(name);
    if (name === name) setName(name);
    if (name === price) setPrice(price);
    if (name === image) setImage(image);
  }

  function handleSubmit(e) {
    e.preventDefault();

    createItem(name, price, image);

    setName("");
    setPrice("");
    setImage("");
  }

  const uploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
  }

  return (
    <>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <ul className='flex-outer'>
          <li>
            <label htmlFor='name'>Name:</label>
            <input type="text" id='name' name="name" onChange={() => handleChange} />
          </li>
          <li>
            <label htmlFor='price'>Price:</label>
            <input type="text" id='price' name="price" />
          </li>
          <li>
            <label htmlFor='image'>Image:</label>
            <input type="file" id='image' name="image" onChange={uploadFile} />
          </li>
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default NewProduct;