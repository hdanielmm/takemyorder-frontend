import React from 'react';
import './style.css';

const uploadFile = (e) => {
  const file = e.target.files[0];
  console.log(file);
}

const NewProduct = () => {
  return (
    <>
      <h1>New Product</h1>
      <form>
        <ul class='flex-outer'>
          <li>
            <label for='name'>Name:</label>
            <input type="text" id='name' name="name" />
          </li>
          <li>
            <label for='price'>Price:</label>
            <input type="text" id='price' name="price" />
          </li>
          <li>
            <label for='image'>Image:</label>
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