import puppyDogGif from '../assets/peach-goma-peach-and-goma.gif'
import { Zoom, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
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
    <section  className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0 bg-white pt-[93px] mt-10 lg:mt-0">
      <div className="col-span-1 h-full flex flex-col items-center justify-center px-3 lg:px-8">
            <h1 className='max-w-[100%] text-center text-4xl lg:text-6xl font-pacifico bg-gradient-to-r bg-clip-text text-transparent to-indigo-500 via-purple-400 from-pink-500'>Ready to Add Some Sparkle to Your Valentine's Day?</h1>
            <p className='mt-8 text-[16px] leading-[20px] text-center text-black/90 font-mont max-w-xl'>Say goodbye to boring Valentine's Day messages! 😂 With just a click of our magical button, you can charm your crush 😌, woo your sweetheart, 😍 or surprise your bestie with a burst of love and laughter 😜. Our whimsical button promises endless fun and excitement as you embark on a journey of romantic mischief. So why wait? Let's sprinkle some love and joy together! 💖✨</p>
            <button onClick={handleButtonClick} className={`mt-8 px-5 py-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-[16px] font-medium rounded-[5px] transition-all duration-200 ease-in-out`}>Copy link</button>
        </div>
       <div className="col-span-1 flex flex-col items-center justify-center">
            <img src={puppyDogGif} alt="puppy-dog-eyes GIF" className="w-[400px]" />
       </div>
    </section>
  )
}

export default HomePage