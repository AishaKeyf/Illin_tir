import { Button } from "@/components/ui/button"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router"
import { supabaseContext } from "@/contexts/SupabaseContext";
import { ArrowBigRight, Search } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    className: "center",
    centerMode: true,
    // fade: true,
    centerPadding: "20px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    // slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerPadding: "20px",
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                centerPadding: "20px",
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "20px",
            }
        }
    ]
};
const showCases = [
    {
        id: 1,
        no: 213,
        title: 'Baa la baafiyay'
    },
    {
        id: 2,
        no: 103,
        title: 'Waa la helay'
    },
    {
        id: 3,
        no: 305,
        title: 'Xogo la gudbiyay'
    }
]

const h = '/p.jpeg'
const u = '/pp.jpg'
const d = '/hh.jpg'
const o = '/g.png'

export const Home = () => {

    const { data, loading, fetchError } = useContext(supabaseContext)
    console.log(data)
    return (
        <>
            <div className="min-h-screen max-w-full bg-blue-50 overflow-hidden">
                {/* Hero section */}
                <div className="relative flex flex-col h-150 bg-[url('/rh.jpg')] bg-center bg-no-repeat bg-cover">
                    <div className="bg-black opacity-50 inset-0  absolute"></div>
                    <div className="absolute w-full  mx-auto px-4 top-20 py-10">
                        <div className="text-center space-y-4 p-5 ">
                            <h1 className="text-white text-3xl font-bold text-center">Baadi-Goobka Qoyska Waa bilowga rajada Rajada</h1>
                            <p className="text-gray-300 text-lg"> Ka qayb qaado dadaalka lagu raadinayo dadk maqan</p>
                            <Link to='/baafi'>
                                <Button className="mb-3 bg-blue-300 cursor-pointer" variant="outline">Baafi</Button>
                            </Link>
                        </div>
                    </div>

                </div>
                {/* Showcase */}
                <div className="w-full mb-5">
                    <div className="w-full flex flex-col md:flex-row justify-center items-center">
                        {showCases.map((showCase) => (
                            <div className="m-5 rounded border-b-4 md:border-r-4 border-blue-200 mx-auto p-5" key={showCase.id}>
                                <h1 className="text-gray-900 font-bold ">{showCase.no}</h1>
                                <p className="text-gray-500 ">{showCase.title}</p>
                            </div>

                        ))}
                    </div>
                </div>

                {/* Success stories */}
                <div className="flex justify-between p-4 md:mx-auto">
                    <h1 className='text-gray-950 font-bold text-center text-2xl'>Sheekooyin farxadleh</h1>
                    <Link to='/maqane'><ArrowBigRight /></Link>
                </div>
                <div className=" p-5 flex flex-col md:flex-row gap-7">
                    <div className="flex flex-col mx-auto">
                        <img src={o} className="w-100 rounded" />
                        <h1 className="text-lg font-grotesk text-gray-500 font-semibold leading-loose">Aabbe  Ahmed wxuu dib ula midoobay<br /> qoyskiisii oo ay kala maqnaayeen moddo 40 sano ah</h1>
                    </div>
                    <div className="flex flex-col ">
                        <img src={o} className="w-100 rounded" />
                        <h1 className="text-lg font-grotesk text-gray-500 font-semibold leading-loose">Aabbe  Ahmed wxuu dib ula midoobay<br /> qoyskiisii oo ay kala maqnaayeen moddo 40 sano ah</h1>
                    </div>
                    <hr className="font-bold" />
                </div>

                {/* Looking for some peaple */}
                <div className="flex justify-between md:mx-auto p-4">
                    <h1 className='text-gray-950 font-bold text-center text-2xl'>Dad maqan oo muhiim ah</h1>
                    <Link to='/maqane'><ArrowBigRight /></Link>
                </div>
                <div className="h-full w-full p-10  bg-blue-200 mb-5 rounded shadow">
                    {loading && <p className='text-green-600 p-5'>Loading.......</p>}
                    {fetchError && <p className='text-red-600 p-5'>{fetchError}</p>}
                    <Slider {...settings}>
                        {data && data.slice(0, 4).map((item) => (
                            <div key={item.id} className=" ">
                                <img src={d} className="w-50 rounded" />
                                <h2 className="px-2 text-gray-900">{item.Magaca}</h2>
                                <p className="px-2 text-gray-600 ">{item.Sharraxaad}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </>
    )
}