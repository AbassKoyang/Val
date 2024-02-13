import { Zoom, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const handleButtonClick = () => {
    navigator.clipboard.writeText('bemyvall.com/will-you-be-my-val');
    toast.success('Link copied to clipboard. Share it with your val. 🤗', {
  position: 'top-center',
  theme:'light',
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  transition: Zoom,
  draggable: true,
    })
  }
  return (
    <header className="w-full px-5 py-4 md:px-4 md:py-3 lg:px-10 lg:py-3 lg:pb-6 bg-white drop-shadow-sm font-mont fixed top-0 left-0 z-50">
        <div className="w-full h-full max-w-[1400px] flex items-center justify-between">
        <h1 className="text-2xl lg:text-4xl font-bold text-pink-500 font-pacifico">beMyVal<span className="text-black text-[72px]">.</span></h1>
        <button onClick={handleButtonClick} className={`px-5 py-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-[16px] font-medium rounded-[5px] transition-all duration-200 ease-in-out`}>Copy link</button>
        </div>
    </header>
  )
}

export default NavBar