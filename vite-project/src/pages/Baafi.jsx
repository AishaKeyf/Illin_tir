import { Button } from '@/components/ui/button';
// import supabase from '@/lib/supabase';
import supabase from '@/lib/supabase';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export const Baafi = () => {
    // console.log(supabase)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [selectedImage, setSelectedImage] = useState('');
    const [formData, setFormData] = useState({})
    const onSubmit = (data) => {
        console.log(data)
        setFormData(data)
    }
    console.log(formData)

    // add data in supabase
    const addData = async () => {
        const { data, error } = await supabase.from('baafin').insert([formData]).select('*')
        console.log(formData)
        if (error) {
            console.error(error)
        }
        // else {
        //     setFormData((prev) => ({ ...prev, data }))

        // }

    }

    return (
        <div className='min-h-screen text-black max-w-full bg-blue-50 overflow-hidden'>
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
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col justify-center items-center p-5 space-y-10'
                    >
                        <div className="flex flex-col w-full pb-0">
                            <div className="mx-auto ring-2 w-full ring-black rounded ">
                                <input className='pl-2 w-full p-3'
                                    type="text"
                                    placeholder='Magaca'
                                    {...register('Magaca', {
                                        required: 'name is required',
                                        pattern: {
                                            value: /^[A-Za-z]+$/i,
                                            message: 'Only letters and spaces allowed'
                                        },
                                        minLength: {
                                            value: 2,
                                            message: 'name must be atleast two'
                                        },
                                    })}
                                />
                            </div>
                            {errors.Magaca && <p className='text-red-400 pt-3'>{errors.Magaca.message}</p>}
                        </div>
                        <div className="grid md:grid-cols-2 gap-5 w-full ">
                            <div className="flex flex-col">
                                <input className='ring-2 ring-black rounded pl-2 p-3'
                                    type="number"
                                    placeholder="Da'da"
                                    {...register('Dada', { required: 'intee sanuu jiray markii kuugu danbaysay ' })}
                                />
                                {errors.Dada && <p className='text-red-400 '>{errors.Dada.message}</p>}
                            </div>

                            <div className="flex flex-col">
                                <select name=""
                                    {...register('Jinsiga', { required: 'Dooro jinsiga uu yahay' })}
                                    className='ring-2 ring-black rounded p-3 pl-2'
                                >
                                    <option value="">Jinsiga</option>
                                    <option value="lab">Lab</option>
                                    <option value="dhaddig">Dhaddig</option>
                                </select>
                                {errors.Jinsiga && <p className='text-red-400 '>{errors.Jinsiga.message}</p>}

                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="mx-auto ring-2 w-full ring-black  rounded  ">
                                <input className='pl-2 w-full p-3'
                                    type="text"
                                    placeholder='Halkee kuugu wardanbaysay'
                                    {...register('Mkwd', { required: 'Geli goobtii kuugu wardanbaysay' })}
                                />
                            </div>
                            {errors.Mkwd && <p className='text-red-400 '>{errors.Mkwd.message}</p>}
                        </div>

                        <div className="flex flex-col w-full">
                            <div className="mx-auto ring-2 w-full ring-black rounded ">
                                <input className='pl-2 w-full  p-3'
                                    type="date"
                                    {...register(' Xkd', { required: 'Dooro xilligii kuugu wardanbaysay' })}
                                    placeholder='xilligii kuuugu wardanbaysay'
                                />
                            </div>
                            {errors.Xkd && <p className='text-red-400 py-4'>{errors.Xkd.message}</p>}
                        </div>

                        <div className="grid l:grid-cols-2 gap-5 w-full">
                            <div className="flex flex-col">
                                <div className="">
                                    <textarea className='p-2 ring-2 ring-black rounded w-full h-100 resize-none  outline-0'
                                        name="info"
                                        placeholder='sharraxaad'
                                        {...register('Sharraxaad', { required: 'ku dar faahfaahin dheerad ah' })}
                                    >
                                    </textarea>
                                </div>
                                <h1> {errors.sharraxaad && <p className='text-red-400 py-4'>{errors.sharraxaad.message}</p>}</h1>

                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col mx-auto ring-2 w-full ring-black rounded ">
                                    <input type="file"
                                        // {...register('sawir', { required: 'soo gali sawirka' })}
                                        name="file"
                                        accept='image/*'
                                        onChange={(e) => {
                                            const file = e.target.files?.[0]
                                            setSelectedImage(
                                                file ? URL.createObjectURL(file) : undefined
                                            )
                                            console.log(file)
                                        }}
                                    />
                                    {selectedImage && (
                                        <img src={selectedImage} className='w-full h-full ' />
                                    )}
                                </div>
                                {/* {errors.Dada && <p className='text-red-400 py-4'>{errors.Dada.message}</p>} */}
                            </div>
                        </div>
                        <div className="">
                            <Button className="bg-fuchsia-500" varient="outline" type="submit" onClick={addData}>submit</Button>
                        </div>
                        <div className="w-full">
                            <p className=' text-gray-700 '>
                                <span className='font-semibold text-xl block'>FG:</span>
                                Fadlan bixi xog saxan si loo fududeeyo raadinta. Mahadsanid.</p>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}
