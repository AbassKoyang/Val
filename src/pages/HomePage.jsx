import { Link } from 'react-router-dom'
import puppyDogGif from '../assets/peach-goma-peach-and-goma.gif'

const HomePage = () => {
  return (
    <section  className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0 bg-white pt-[93px] mt-10 lg:mt-0">
      <div className="col-span-1 h-full flex flex-col items-center justify-center px-3 lg:px-8">
            <h1 className='max-w-[100%] text-center text-4xl lg:text-6xl text-black font-pacifico'>Ready to Add Some Sparkle to Your Valentine's Day?</h1>
            <p className='mt-8 text-[16px] leading-[20px] text-center text-black/90 font-mont max-w-xl'>Say goodbye to boring Valentine's Day messages! 😂 With just a click of our magical button, you can charm your crush 😌, woo your sweetheart, 😍 or surprise your bestie with a burst of love and laughter 😜. Our whimsical button promises endless fun and excitement as you embark on a journey of romantic mischief. So why wait? Let's sprinkle some love and joy together! 💖✨</p>
            <Link to='be-my-val' className='px-4 py-1.5 text-lg md:text-xl text-white font-medium rounded-full mt-6 bg-pink-500'>Copy link</Link>
        </div>
       <div className="col-span-1 flex flex-col items-center justify-center">
            <img src={puppyDogGif} alt="puppy-dog-eyes GIF" className="w-[400px]" />
       </div>
    </section>
  )
}

export default HomePage