import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
  return (
    <div>
        <nav className="flex justify-center items-center gap-4 flex-col w-screen h-screen bg-gray-800 text-gray-100">
            <div className=''>
                <span className='text-4xl font-sans font-bold'> Cheng </span>
            </div>   
            
            <p className='max-w-2xl text-center '>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book.
            </p>
            
            <div className='flex gap-4 text-2xl'>
                <div>
                    <a href='#0'>
                        Projects
                    </a>
                </div>
                <div>
                    <a href='#'>
                        Articles
                    </a>
                </div>
                <div>
                    <a href='#'>
                        Contact me
                    </a>
                </div>
            </div>
            <div className='text-xl flex gap-4 '>
                <a href='https://ethereum.stackexchange.com/users/101509/theycallmecheng' className='hover:text-green-500'>
                    <i class="fa-brands fa-stack-overflow"></i>
                </a>
                <a href='https://github.com/TheyCallMeCheng' className='hover:text-green-500'>
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        
        </nav>
    </div>
  )
}

export default Navbar