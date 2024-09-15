import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-400'>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
        <li>
          <a href="https://x.com/arshdeepsodhi7" target="_blank" rel="noopener noreferrer">Twitter</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div>
          <p className='font-playfair font-thin'>Any Questions? </p>
          <a href="#" className='font-lato font-medium'>Talk to the specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
