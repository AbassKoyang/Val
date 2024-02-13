import { Link } from 'react-router-dom';
import demo from '../assets/ViteReact-ezgif.com-crop.gif'

const HomePage = () => {
  return (
    <section  className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0 bg-white pt-[93px] mt-10 lg:mt-0">
      <div className="col-span-1 h-full flex flex-col items-center justify-center px-3 lg:px-8">
            <h1 className='max-w-[100%] text-center text-4xl lg:text-6xl font-pacifico bg-gradient-to-r bg-clip-text text-transparent to-indigo-500 via-purple-400 from-pink-500'>Ready to Add Some Sparkle to Your Valentine's Day?</h1>
            <p className='mt-8 text-[16px] leading-[20px] text-center text-black/90 font-mont max-w-xl'>Say goodbye to boring Valentine's Day messages! 😂 With just a click of our magical button, you can charm your crush 😌, woo your sweetheart, 😍 or surprise your bestie with a burst of love and laughter 😜. Our whimsical button promises endless fun and excitement as you embark on a journey of romantic mischief. So why wait? Let's sprinkle some love and joy together! 💖✨</p>
            <p className='mt-3 text-[16px] leading-[20px] text-center text-black/90 font-mont max-w-xl'>Check it out by clicking the link below. If you like it, copy the link and share it with your friends/crush/lover or whoever. 😎</p>
            <img src={demo} alt="Demo" className={`w-full max-w-[500px] mt-4 drop-shadow-[0_50px_50px_rgba(255,192,203,0.7)] lg:hidden`} />
            <Link to='will-you-be-my-val' className={`mt-8 px-5 py-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-[16px] font-medium rounded-[5px] transition-all duration-200 ease-in-out`}>Give it a try</Link>
        </div>
       <div className="col-span-1 flex flex-col items-center justify-center">
       <img src={demo} alt="Demo" className={`hidden lg:block w-[600px] drop-shadow-[0_50px_50px_rgba(255,192,203,0.7)]`} />
       </div>
    </section>
  )
}

export default HomePage