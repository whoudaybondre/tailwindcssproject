// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-400'>
        <li className=' hover:text-black'> <a href='#'> FACEBOOK</a></li>
        <li className=' hover:text-black'> <a href='#'> INSTAGRAM</a></li>
        <li className=' hover:text-black'> <a href='#'> TWITTER</a></li>
      </ul>
      <div className='flex gap-2'>
        <img src='./assets/Help-Avatar.svg' alt='help'/>
        <div>
          <p className='font-playfair font-thin'>Have any questions?</p>
          <a href='#' className='font-lato font-medium'>Talk to specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
