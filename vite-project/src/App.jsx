import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { Baafi } from './pages/Baafi'
import { Header } from './Component/Header'
import { Footer } from './Component/Footer'
// import { Maqane } from './pages/Maqane'

function App() {

    return (
        <div className='font-Poppins overflow-hidden max-w-full'>
            <Header />
            <main >
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='maqane' element={<Maqane />} /> */}
                    <Route path='Baafi' element={<Baafi />} />
                </Routes>
                {/* <h2 className='text-center font-bold text-3xl '>illintire</h2> */}
            </main>
            <Footer />
        </div>
    )
}

export default App
