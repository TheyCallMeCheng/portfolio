import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from "react-router-dom";


function Home() {
  return (
    <div>
        <nav className="flex justify-center items-center gap-4 flex-col w-screen h-screen bg-slate-900 text-gray-100 ">
            <div className=''>    
                <span className='text-4xl font-sans font-bold '> Cheng  </span>
            </div>   
            
            <p className='max-w-2xl text-center '>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book.
            </p>
            
            <div className='flex gap-4 text-2xl '>
                <div>
                    <Link to="/Projects" className='hover:text-violet-700'>
                        Projects
                    </Link>
                </div>
                <div>
                    <a href='#' className='hover:text-violet-700'>
                        Articles
                    </a>
                </div>
                <div>
                    <a href='#' className='hover:text-violet-700'>
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

export default Home