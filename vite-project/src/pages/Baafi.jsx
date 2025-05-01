import { Button } from '@/components/ui/button';
// import supabase from '@/lib/supabase';
import supabase from '@/lib/supabase';
import React, { useState } from 'react'

// const { supabaseUrl, supabaseKey } = initSupabase
export const Baafi = () => {

    const [selectedImage, setSelectedImage] = useState('');
    const hundleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='min-h-screen text-black max-w-full bg-blue-50'>
            <div className="h-100 relative bg-[url('/ms.jpg')] bg-center bg-cover bg-repeat">
                <div className="absolute bg-black opacity-70 inset-0"></div>
                <div className="absolute w-full  mx-auto px-4 md:top-40 top-25 py-10">
                    <div className="text-center space-y-4 p-5 ">
                        <h1 className='text-3xl font-bold text-white font-Poppins'>Soo gudbi qof kaa maqan</h1>
                    </div>
                </div>
            </div>
            <div className=" bg-light-50 flex items-center">
                <div className="mx-auto md:w-1/2 bg-amber-50 shadow ">
                    <form onSubmit={hundleSubmit} className='flex flex-col justify-center items-center p-5 space-y-10'>
                        <div className="mx-auto ring-2 w-full ring-black rounded ">
                            <input className='pl-2 w-full p-3'
                                type="text" name="" id="" placeholder='Magaca'
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-5 md:w-full ">
                            <input className='ring-2 ring-black rounded pl-2 p-3'
                                type="number" name="" id="" placeholder="Da'da" />
                            <select name="" id="" className='ring-2 ring-black rounded p-3 pl-2'>
                                <option value="">Jinsiga</option>
                                <option value="lab">Lab</option>
                                <option value="dhaddig">Dhaddig</option>
                            </select>
                        </div>
                        <div className="mx-auto ring-2 w-full ring-black  rounded  ">
                            <input className='pl-2 w-full p-3'
                                type="text" name="" id="" placeholder='Halkee kuugu wardanbaysay'
                            />
                        </div>
                        <div className="mx-auto ring-2 w-full ring-black rounded
                        ">
                            <input className='pl-2 w-full  p-3'
                                type="date" name="" id="" placeholder='Xilligee kuugu danbaysay'
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="">
                                <textarea className='h-1/2 ring-2 ring-black rounded  w-full'
                                    name="info" placeholder='sharraxaad'></textarea>
                            </div>
                            <div className="flex flex-col mx-auto ring-2 w-full ring-black rounded ">
                                <input type="file" name="file" accept='image/*'
                                    onChange={(e) => {
                                        const file = e.target.files?.[0]
                                        setSelectedImage(
                                            file ? URL.createObjectURL(file) : undefined
                                        )
                                    }}
                                />
                                {selectedImage && (
                                    <img src={selectedImage} className='w-full h-full ' />
                                )}
                            </div>
                        </div>
                        <div className="">
                            <Button varient="outline" type="submit" onClick={() => console.log(supabase)}>submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
