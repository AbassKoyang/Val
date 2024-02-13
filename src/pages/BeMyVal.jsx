import { useState } from 'react';
import { convincingTexts } from '../assets/constants'
import puppyDogGif from '../assets/peach-goma-peach-and-goma.gif'
import kissesGif from '../assets/peach-goma-love-peach-goma.gif'
import aloneGif from '../assets/alone-lonely.gif'

const BeMyVal = () => {
    const [convincingTextsNumber, setConvincingTextsNumber] = useState(1);
    const [growCount, setgrowCount] = useState(1);
    const [shrinkCount, setShrinkCount] = useState(1)
    
    const handleNoButtonClick = () => {
        if(convincingTextsNumber < 20){
            setConvincingTextsNumber((prev)  => prev + 1);
        } else{
            setConvincingTextsNumber(2);
        }
        if(growCount < 2.5){
            setgrowCount((prev)  => prev + 0.1);
            setShrinkCount((prev)  => prev - 0.05);
        }
    }
    const handleYesButtonClick = () => {
        setConvincingTextsNumber(0);
        setShrinkCount(1);
        setgrowCount(1);
    }
  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0 bg-white pt-[93px] mt-10 lg:mt-0">
        <div className="col-span-1 h-full flex flex-col items-center justify-center px-3 lg:px-8">
            <h1 className='max-w-[100%] text-center text-4xl lg:text-6xl font-pacifico bg-gradient-to-r bg-clip-text text-transparent to-indigo-500 via-purple-400 from-pink-500 '>With every beat of my heart, I ask: will you be my Valentine?</h1>
            <p className='mt-8 text-[16px] leading-[20px] text-center text-black/90 font-mont max-w-xl'>{convincingTexts[convincingTextsNumber]}</p>
            <div className="w-full flex items-center justify-center mt-4 lg:hidden transition-all duration-200 ease-in-out">
                { convincingTextsNumber > 0 && convincingTextsNumber < 2 && (
                    <img src={puppyDogGif} alt="puppy-dog-eyes GIF" className="w-[250px]" />
                )}
                { convincingTextsNumber > 1 && (
                    <img src={aloneGif} alt="puppy-dog-eyes GIF" className="w-[230px]" />
                )}
                { convincingTextsNumber === 0 && (
                    <img src={kissesGif} alt="Two cats kissing GIF" className="w-[400px] animate-bounce" />
                )}
            </div>
            <div className="w-full flex items-center justify-center gap-3 mt-8">
                <button onClick={handleYesButtonClick} className={`px-5 py-[10px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-[16px] font-medium rounded-[5px] transition-all duration-200 ease-in-out`} style={{ transform: `scale(${growCount})` }}>Yesssss</button>
                <button onClick={handleNoButtonClick} className={`px-5 py-[10px] bg-gray-400 text-white text-[16px] font-medium rounded-[5px] transition-all duration-200 ease-in-out`} style={{ transform: `scale(${shrinkCount})` }}>No, sorry</button>
            </div>
        </div>
        <div className="col-span-1 self-center items-center justify-center hidden lg:flex transition-all duration-200 ease-in-out">
        { convincingTextsNumber > 0 && convincingTextsNumber < 2 && (
            <img src={puppyDogGif} alt="puppy-dog-eyes GIF" className="w-[250px] lg:w-[400px] drop-shadow-[0_50px_50px_rgba(255,192,203,0.7)]" />
        )}
        { convincingTextsNumber > 1 && (
            <img src={aloneGif} alt="puppy-dog-eyes GIF" className={`w-[230px] lg:w-[390px] transition-transform duration-300 ease-in-out drop-shadow-[0_50px_50px_rgba(255,192,203,0.7)]`} />
        )}
        { convincingTextsNumber === 0 && (
            <img src={kissesGif} alt="Two cats kissing GIF" className={`w-[400px] lg:w-[550px] animate-bounce drop-shadow-[0_50px_50px_rgba(255,192,203,0.7)]`} />
        )}
        </div>
    </section>
  )
}

export default BeMyVal