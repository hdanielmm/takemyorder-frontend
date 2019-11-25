import React from 'react';
import './style.css';

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <ul className='flex-outer'>
          <li>
            <label htmlFor='tableNumber'>Table number:</label>
            <input type="text" id='tableNumber' name="tableNumber" />
          </li>
          <li>
            <label htmlFor='code'>Code:</label>
            <input type="text" id='code' name="code" />
          </li>
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default Login;