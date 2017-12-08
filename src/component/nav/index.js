import React from 'react';
import './index.css';

const Nav = props =>(
  <ul className='nav'>
    {
      props.list.map((ele, index)=>(
        <li key={index}>{ele.text}</li>
      ))
    }
  </ul>
);

export default Nav;
