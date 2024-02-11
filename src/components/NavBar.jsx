import { useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

const NavBar = () => {
    const location = useLocation();
    const [isNavbarOpen, setisNavbarOpen] = useState(false);
  return (
    <header className="w-full px-5 py-4 md:px-4 md:py-3 lg:px-7 lg:py-6 bg-white drop-shadow-md font-mont fixed top-0 left-0 z-50">
        <div className="w-full h-full max-w-[1400px] flex items-center justify-between">
        <h1 className="text-2xl lg:text-[38px] font-bold text-pink-500 font-pacifico lg:leading-[0px] z-30">beMyVal<span className="text-black text-[72px]">.</span></h1>
        <nav className="hidden lg:flex h-full items-center gap-8 text-xl font-semibold">
            <Link to='/' aria-labelledby="Home" className={`${location.pathname === '/' ? 'text-pink-500' : 'text-black/90'}`}>Home</Link>
            <Link to='/' aria-labelledby="Home" className={`${location.pathname === '/home' ? 'text-pink-500' : 'text-black/90'}`}>E-cards</Link>
        </nav>
        <Link className="px-3 py-2 bg-pink-500 text-white text-lg font-semibold rounded-3xl hidden lg:flex">Create cards</Link>
        <button className="p-0 m-0 outline-0 border-0 bg-transparent block lg:hidden z-30" onClick={()=>setisNavbarOpen(!isNavbarOpen)}>
        {isNavbarOpen ? <RiCloseFill className="size-6" /> : <RiMenuFill className="size-6" />}
        </button>
        </div>
        <nav className={`absolute ${isNavbarOpen ? 'top-0 opacity-100' : '-top-[500px] opacity-5'} left-0 w-full lg:static flex flex-col items-center gap-8 text-xl font-semibold bg-white p-6 transition-all duration-300 ease-in-out lg:hidden mt-[84px] z-20 drop-shadow-md`}>
            <Link to='/' aria-labelledby="Home" className={`${location.pathname === '/' ? 'text-pink-500' : 'text-black/90'}`}>Home</Link>
            <Link to='/' aria-labelledby="Home" className={`${location.pathname === '/home' ? 'text-pink-500' : 'text-black/90'}`}>E-cards</Link>
            <Link className="px-3 py-2 bg-pink-500 text-white text-lg font-semibold rounded-3xl">Create cards</Link>
        </nav>
    </header>
  )
}

export default NavBar