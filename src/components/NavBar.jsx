import { Link, useLocation } from "react-router-dom"

const NavBar = () => {
    const location = useLocation();
    console.log(location)
  return (
    <header className="w-full px-2 py-2 md:px-4 md:py-3 lg:px-7 lg:py-6 bg-white drop-shadow-sm font-mont">
        <div className="w-full h-full max-w-[1400px] flex items-center justify-between">
        <h1 className="text-[38px] font-bold text-pink-600 font-pacifico leading-[0px]">beMyVal<span className="text-black text-[72px]">.</span></h1>
        <nav className="flex h-full items-center gap-8 text-xl font-semibold">
            <Link to='/' aria-labelledby="Home" className={`${location.pathname === '/' ? 'text-pink-600' : 'text-black/90'}`}>Home</Link>
            <Link to='/' aria-labelledby="Home" className={`${location.pathname === '/home' ? 'text-pink-600' : 'text-black/90'}`}>E-cards</Link>
        </nav>
        <Link className="px-3 py-2 bg-pink-600 text-white text-lg font-semibold rounded-3xl">Create cards</Link>
        </div>
    </header>
  )
}

export default NavBar