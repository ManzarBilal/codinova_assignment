import React from 'react'
import style from './header.module.css'

const Header = () => {
  return (
    <div className='text-center mt-5'>
        <h5 className='fw-bold'>Top crypto exchange</h5>
        <small>Compare all 190 top crypto exchanges. The list is ranked by trading volume</small>
         <h6 className='text-primary mt-4'>Exchanges</h6>
         <div className={style.horizontal_line}></div>
         <hr />
    </div>
  )
}

export default Header