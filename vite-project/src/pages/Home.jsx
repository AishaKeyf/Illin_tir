import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"
import { Keyboard, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const showCases = [
    {
        id: 1,
        no: 213,
        title: 'Dadka la soo baafiyay'
    },
    {
        id: 2,
        no: 103,
        title: 'Dadka la soo helay'
    },
    {
        id: 3,
        no: 305,
        title: 'Talooyin la soo gudbiyay'
    }
]
const works = [
    {
        id: 1,
        title: ' Raadso qof',
        Icon: <Search color="white" />,
    },
    {
        id: 2,
        title: 'Soo gudbi xog',
        Icon: '',
    },
    {
        id: 3,
        title: 'La wadaag bulshada',
        Icon: <Link />,
    }
]

const a = [
    {
        id: 1,
        name: 'maxamed ahmed',
        des: 'waxaa lawaayay 10 sano kahor'
    },
    {
        id: 2,
        name: 'jibriil',
        des: 'waxaa lawaayay 10 sano kahor'
    },
    {
        id: 3,
        name: 'ali',
        des: 'waxaa lawaayay 10 sano kahor'
    },
    {
        id: 4,
        name: ' ahmed',
        des: 'waxaa lawaayay 10 sano kahor'
    },
    {
        id: 5,
        name: 'layla',
        des: 'waxaa lawaayay 10 sano kahor'
    },
    {
        id: 6,
        name: 'layla',
        des: 'waxaa lawaayay 10 sano kahor'
    },
    {
        id: 7,
        name: 'layla',
        des: 'waxaa lawaayay 10 sano kahor'
    },
]
const u = '/pp.jpg'
const d = '/p.jpeg'
const o = '/ms.jpg'
const randum = Math.floor(Math.random() * a.length)
console.log(randum, a[randum])
const dk = a[randum]
export const Home = () => {

    return (
        <div className="min-h-screen max-w-full bg-blue-50 overflow-hidden">
            {/* Hero section */}
            <div className="relative flex flex-col h-150 bg-[url('/rh.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="bg-black opacity-50 inset-0  absolute"></div>
                <div className="absolute w-full  mx-auto px-4 top-20 py-10">
                    <div className="text-center space-y-4 p-5 ">
                        <h1 className="text-white text-3xl font-bold text-center">Baadi-Goobka Qoyska Waa bilowga rajada Rajada</h1>
                        <p className="text-gray-300 text-lg"> Ka qayb qaado dadaalka lagu raadinayo dadk maqan</p>
                        <Link to='/baafi'>
                            <Button className="mb-3 bg-fuchsia-500 cursor-pointer" variant="outline">Baafi</Button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="mr-6   w-full ">
                <div className="space-x-2 flex justify-between items-center">
                    {showCases.map((showCase) => (
                        <div className="m-5 bg-blue-800 mx-auto p-5" key={showCase.id}>
                            <h1>{showCase.no}</h1>
                            <p>{showCase.title}</p>
                        </div>

                    ))}
                </div>
            </div>
            {/* How it works */}
            {/* <div className=" w-full bg-blue-200  mx-auto rounded backdrop-blur-md">
                <div className="flex justify-between items-center">
                    {works.map((work) => (
                        <div className="" key={work.id}>
                            <div className="">
                                <p>{work.Icon}</p>
                            </div>
                            <div className="">
                                <h1>{work.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="flex bg-red-500 items-center justify-center">
                <Swiper className="flex items-center justify-center mySwiper"
                    modules={[Keyboard, Autoplay, Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="flex items-center justify-center">
                            <img src={u} className="w-50" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src={d} className="w-50" /></SwiperSlide>
                    <SwiperSlide><img src={o} className="w-50" /></SwiperSlide>
                    <SwiperSlide><img src={d} className="w-50" /></SwiperSlide>

                </Swiper>
            </div>
            <div className="p-5 w-full ">
                <h1 className='text-gray-950 font-bold '>Dad maqan oo muhiim ah</h1>

                <div className="flex justify-between  w-full overflow-visible gap-8 ">
                    {
                        a.map((a) => (
                            <div className="block visible  flex-1 mt-5 bg-blue-100" key={a.id}>
                                <div className="flex w-2xs gap-4 flex-col ">
                                    <div className="">
                                        <img src={u} className="w-full" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="">
                                            <h1 className='text-gray-570 font-semibold '>{a.name}</h1>
                                            <p className='text-gray-800 text-sm'>{a.des}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}