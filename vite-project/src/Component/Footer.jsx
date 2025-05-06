import { LucideBotMessageSquare } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

export const Footer = () => {
    const year = new Date().getFullYear()
    console.log(year)
    return (
        <footer className='bg-light-50 p-5'>
            <div className="flex justify-center items-center text-sm">
                <h5 className='text-gray-500 '>Copyright ©{year} by
                    <Link to='/'>
                        <span className='font-Sacramento text-black hover:underline cursor-pointer  text-xl font-bold px-2'>Illintir</span>
                    </Link>
                    All rights reserved.
                </h5>
            </div>
            <hr className='w-full text-gray-400 mt-4 pb-2' />
            <div className="text-sm flex justify-center gap-5 items-center text-gray-400">
                <Link to='/privacy'
                    className='hover:text-blue-500 hover:underline'
                >Privacy Policy
                </Link>
                <Link to='/terms'
                    className='hover:text-blue-500 hover:underline'
                >Terms of Use
                </Link>
            </div>
        </footer>
    )
}
