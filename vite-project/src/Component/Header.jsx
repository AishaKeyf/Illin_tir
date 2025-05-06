import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Link } from 'react-router'
import { AlignRight, X, CircleUserRound } from 'lucide-react';

export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(false)
    const logOut = () => setIsLoggedIn(false)
    return (
        <header className='absolute  w-full z-10 p-2 mx-auto space-y-2 overflow-hidden'>
            <div className="text-white  backdrop-blur-md sticky  mx-auto px-4 sm:px-6 lg:px-8 ">

                {/* left, right  && centre*/}

                <div className="flex justify-between ">

                    {/* left */}

                    <div className="flex">
                        <div className="flex justify-center items-center">
                            <h1 className='font-Sacramento text-fuchsia-500 font-bold text-4xl '>Illintir</h1>
                        </div>
                    </div>

                    {/* centre */}

                    <div className="flex justify-between items-center mt-3">
                        {isLoggedIn && (
                            <>
                                <nav className="hidden md:flex justify-between items-center space-x-2 text-2xl gap-8 font-bold">
                                    <Link className={`hover:text-fuchsia-500`} to='/'>Home</Link>
                                    <Link className={`hover:text-fuchsia-500`} to='/maqane'>Maqane</Link>
                                    <Link className={`hover:text-fuchsia-500`} to='/baafi'>Baafi</Link>
                                </nav>
                            </>
                        )}
                    </div>

                    {/* right */}

                    <div className="hidden md:flex justify-between items-center ">
                        {isLoggedIn && (
                            <div className="flex gap-5 space-y-5 ">
                                <div className="flex items-center mt-6">
                                    <Button onClick={logOut}
                                        className="bg-fuchsia-500  cursor-pointer w-8 h-8 rounded-full" variant='' >
                                        <CircleUserRound />
                                    </Button>
                                </div>
                                <div className="flex justify-center items-center ">
                                    <Button
                                        className="w-full rounded bg-fuchsia-500 cursor-pointer px-4" variant='destructive'>
                                        Log out
                                    </Button>
                                </div>
                            </div>

                        )}

                        {!isLoggedIn &&
                            <div className='mx-auto  flex gap-5 space-y-5'>
                                <div className="flex justify-center items-center mt-6">
                                    <Button className="w-full rounded bg-fuchsia-500 cursor-pointer" variant='destructive'>
                                        Register
                                    </Button>
                                </div>
                                <div className="flex justify-center items-center mt-1 ">
                                    <Button onClick={setIsLoggedIn(true)}
                                        className="w-full rounded bg-fuchsia-500 cursor-pointer px-4" variant='destructive'>
                                        Login
                                    </Button>
                                </div>
                            </div>
                        }
                    </div>

                    {/* Hamburger */}

                    <div className="-mr-2 flex items-center md:hidden ">
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
                                        className="flex flex-col space-y-4 cursor-pointer justify-centre items-center space-x-2 text-xl font-bold"
                                    >
                                        <Link className={`hover:text-fuchsia-500`} to='/'>Home</Link>
                                        <Link className={`hover:text-fuchsia-500`} to='/maqane'>Maqane</Link>
                                        <Link className={`hover:text-fuchsia-500`} to='/baafi'>Baafi</Link>
                                    </nav>
                                    <div className="">
                                        <Button className="w-full rounded bg-fuchsia-500 cursor-pointer" variant='destructive'><CircleUserRound /></Button>
                                    </div>
                                </>
                            )}

                            {!isLoggedIn &&
                                <div className='mx-auto p-5 space-y-5'>
                                    <div className="">
                                        <Button className="w-full rounded bg-fuchsia-500 cursor-pointer" variant='destructive'>Register
                                        </Button>
                                    </div>
                                    <div className="">
                                        <Button className="w-full rounded bg-fuchsia-500 cursor-pointer" variant='destructive'>Login</Button>
                                    </div>
                                </div>
                            }
                        </>
                    </div>
                )

            }

        </header>
    )
}