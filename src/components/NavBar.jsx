import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="w-full px-2 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 bg-white drop-shadow-sm font-pacifico">
        <div className="w-full h-full max-w-[1400px] flex items-center justify-between">
        <h1 className="text-5xl font-bold text-pink-600 font-pacifico leading-0">Val<span className="text-black text-7xl">.</span></h1>
        <nav className="flex items-center gap-2 text-lg font-medium capitalize">
            <Link to='/' aria-labelledby="Home">Home</Link>
            <Link to='/' aria-labelledby="Home">E-cards</Link>
        </nav>
        <button className="px-3 py-2 bg-pink-600 text-white text-lg font-medium rounded-3xl">Create cards</button>
        </div>
    </header>
  )
}

export default NavBar