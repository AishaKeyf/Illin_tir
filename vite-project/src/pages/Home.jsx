import { Button } from "@/components/ui/button"
import { Link, Search } from "lucide-react"
import { useState } from "react"
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

export const Home = () => {

    return (
        <div className="min-h-screen bg-blue-50 ">
            {/* Hero section */}
            <div className="relative flex flex-col h-150 bg-[url('/rh.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="bg-black opacity-50 inset-0  absolute"></div>
                <div className="absolute w-full  mx-auto px-4 top-20 py-10">
                    <div className="text-center space-y-4 p-5 ">
                        <h1 className="text-white text-3xl font-bold text-center">Baadi-Goobka Qoyska Waa bilowga rajada Rajada</h1>
                        <p className="text-gray-300 text-lg"> Ka qayb qaado dadaalka lagu raadinayo dadk maqan</p>
                        <Button className="mb-3 bg-huruud-0 cursor-pointer" variant="outline">Baafi</Button>
                    </div>
                </div>

            </div>
            <div className=" w-full  mx-auto rounded backdrop-blur-md">
                <div className="flex justify-between items-center">
                    {showCases.map((showCase) => (
                        <div className="" key={showCase.id}>
                            <h1>{showCase.no}</h1>
                            <p>{showCase.title}</p>
                        </div>

                    ))}
                </div>
            </div>
            {/* How it works */}
            <div className="bg-light-50 w-full text-black">
                <ul>
                    {works.map((work) => (
                        <div className="bg-">
                            <li key={work.id}>{work.title}</li>
                            <i>{work.Icon}</i>
                        </div>

                    ))}
                </ul>
            </div>
        </div>
    )
}