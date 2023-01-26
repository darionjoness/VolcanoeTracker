import React from 'react'
import { AiFillFire } from "react-icons/ai";

const Header = () => {
  return (
    <div className='headerDiv'>
        <h1>Active Volcanoes</h1>
        <AiFillFire className='fire' />
    </div>
  )
}

export default Header