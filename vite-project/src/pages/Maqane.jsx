import React, { useContext, useEffect, useState } from 'react'
import img from '../assets/react.svg'
import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'
import { supabaseContext } from '@/contexts/SupabaseContext'




export const Maqane = () => {
    const [search, setSearch] = useState('')
    const u = img
    const p = "/k.jpg"
    const { data, loading, fetchError } = useContext(supabaseContext)


    return (
        <div className='min-h-screen bg-blue-50'>

            {/* Hero section */}

            <div className="text-white relative flex flex-col h-130 bg-[url('/hh.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="bg-black opacity-60 inset-0 absolute"></div>

                <div className="absolute w-full mx-auto px-4 top-40 py-10">
                    <div className="text-center space-y-4 p-5">
                        <h1 className='font-Poppins font-bold text-6xl'> Dadyow Maqan</h1>
                    </div>
                </div>
            </div>

            {/* search a missing person */}
            <div className="p-5 mt-5 w-full md:w-1/2 ">
                <div className="ring-2 ring-black flex gap-2 p-2 rounded">
                    <SearchIcon className='text-gray-500' />
                    <input
                        type="search" placeholder='Search'
                        onChange={(e) => setSearch(e.target.value)}
                        className='w-full outline-none'
                    />
                </div>
            </div>

            {/* missing peaple */}

            {/* {!missingPeaple && (<p className='text-2xl text-red-700'> Ther's no data to display yet</p>)} */}
            {loading && <p className='text-green-600'>Loading.......</p>}
            {fetchError && <p className='text-red-600'>{fetchError}</p>}
            <div className="p-5 w-full gap-4 grid md:grid-cols-2 lg:grid-cols-3">

                {data && (
                    <>
                        {
                            data.filter((person) => {
                                return search.toLowerCase() === '' ? person : person.Magaca.toLowerCase().includes(search)
                            }).map((a) => (
                                <div className=" mt-5 p-5 bg-blue-100 w-full" key={a.id}>
                                    <div className="flex gap-4 ">
                                        <div className="pt-3 w-1/2">
                                            <img src={p} className='w-20 h-20 rounded-full' />
                                        </div>
                                        <div className="space-y-2 w-full">
                                            <div className="w-full">
                                                <h1 className='text-gray-950 font-bold '>{a.Magaca}</h1>
                                                <p className='text-gray-800 text-sm'>{a.Sharraxaad}</p>
                                            </div>
                                            <div className="">
                                                <Button className="bg-fuchsia-500 cursor-pointer">Eeg Faahfaahin</Button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </>

                )}

            </div>

        </div >
    )
}