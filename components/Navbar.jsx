import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 w-full absolute '>
            <h1 className='text-red-700 font-bold cursor-pointer text-4xl'>NETFLIX</h1>
            <div className='text-white'>
                <button className='pr-4'>Sign In</button>
                <button className=' bg-red-600 rounded px-6 py-2'>Sign Out</button>
            </div>
        </div>
    )
}

export default Navbar