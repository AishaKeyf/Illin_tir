import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Link } from 'react-router'

export const Header = () => {
    const [sign, setSign] = useState(false)
    return (
        <nav className='absolute w-full z-10 p-5 m-2 space-y-2'>
            <div className="text-white  backdrop-blur-md sticky  mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center">
                <div className="">
                    <h1 className='font-Sacramento text-fuchsia-400 font-bold text-3xl '>Illintir</h1>
                </div>

                <div className="flex justify-between items-center space-x-2 text-xl font-bold">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Brows</Link>
                    <Link to='/baafi'>Baafi</Link>
                </div>
                <div className="">
                    <Button className="bg-mint-500 cursor-pointer" variant='outline' >Sign in</Button>
                </div>
            </div>
        </nav>
    )
}