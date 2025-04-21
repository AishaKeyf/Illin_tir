import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Link } from 'react-router'
import { AlignRight, X, CircleUserRound } from 'lucide-react';

export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(false)
    return (
        <header className='absolute  w-full z-10 p-5 m-2 space-y-2 overflow-hidden'>
            <div className="text-white  backdrop-blur-md sticky  mx-auto px-4 sm:px-6 lg:px-8 ">

                {/* left, right  && centre*/}

                <div className="flex justify-between ">

                    {/* left */}

                    <div className="flex">
                        <div className="flex items-center">
                            <h1 className='font-Sacramento text-fuchsia-500 font-bold text-4xl '>Illintir</h1>
                        </div>
                    </div>

                    {/* centre */}

                    <div className="flex justify-between items-center">
                        {isLoggedIn && (
                            <>
                                <nav className="hidden md:flex justify-between items-center space-x-2 text-xl font-bold">
                                    <Link className={`hover:text-srb-0`} to='/'>Home</Link>
                                    <Link className={`hover:text-srb-0`} to='/'>Brows</Link>
                                    <Link className={`hover:text-srb-0`} to='/baafi'>Baafi</Link>
                                </nav>
                            </>
                        )}
                    </div>

                    {/* right */}

                    <div className="hidden md:flex justify-between items-center ">
                        {isLoggedIn && (
                            <div className="">
                                <div className="">
                                    <Button className="text-huruud-0 cursor-pointer w-8 h-8 rounded-full" variant='outline' ><CircleUserRound /></Button>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Hamburger */}

                    <div className="-mr-2 flex items-center sm:hidden ">
                        <Button onClick={() => setMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <AlignRight color='white' />}
                        </Button>
                    </div>
                </div>
            </div>

            {
                isMenuOpen && (
                    <div className="overflow-hidden backdrop-blur-xl text-white space-y-4 mx-auto z-10  py-4"  >
                        <>
                            {isLoggedIn && (
                                <>
                                    <nav
                                        className="flex flex-col hover:text-red-500 space-y-4 cursor-pointer justify-centre items-center space-x-2 text-xl font-bold"
                                    >
                                        <Link className={`hover:text-lrb-0`} to='/'>Home</Link>
                                        <Link className={`hover:text-blue-500`} to='/'>Brows</Link>
                                        <Link className={`hover:text-blue-500`} to='/baafi'>Baafi</Link>
                                    </nav>
                                    <div className="">
                                        <Button className="w-full rounded bg-huruud-0 cursor-pointer" variant='destructive'><CircleUserRound /></Button>
                                    </div>
                                </>
                            )}

                            {!isLoggedIn &&
                                <>
                                    <div className="">
                                        <Button className="w-full rounded bg-huruud-0 cursor-pointer" variant='destructive'>Register
                                        </Button>
                                    </div>
                                    <div className="">
                                        <Button className="w-full rounded bg-huruud-0 cursor-pointer" variant='destructive'>Login</Button>
                                    </div>
                                </>
                            }
                        </>
                    </div>
                )

            }

        </header>
    )
}