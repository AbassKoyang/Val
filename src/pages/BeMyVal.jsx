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
            <h1 className='max-w-[100%] text-center text-4xl lg:text-6xl text-black font-pacifico'>With every beat of my heart, I ask: will you be my Valentine?</h1>
            <p className='mt-8 text-[16px] leading-[20px] text-center text-black/90 font-mont max-w-xl'>{convincingTexts[convincingTextsNumber]}</p>
            <div className="w-full flex items-center justify-center mt-4 lg:hidden">
                { convincingTextsNumber > 0 && convincingTextsNumber < 2 && (
                    <img src={puppyDogGif} alt="puppy-dog-eyes GIF" className="w-[250px] lg:w-[400px] transition-all duration-300 ease-in-out" />
                )}
                { convincingTextsNumber > 1 && (
                    <img src={aloneGif} alt="puppy-dog-eyes GIF" className="w-[230px] lg:w-[390px] transition-all duration-300 ease-in-out" />
                )}
                { convincingTextsNumber === 0 && (
                    <img src={kissesGif} alt="Two cats kissing GIF" className="w-[400px] lg:w-[600px] transition-all duration-300 ease-in-out" />
                )}
            </div>
            <div className="w-full flex items-center justify-center gap-3 mt-8">
                <button onClick={handleYesButtonClick} className={`px-4 py-2 bg-pink-500 text-white text-xl font-medium rounded-[8px] transition-all duration-200 ease-in-out`} style={{ transform: `scale(${growCount})` }}>Yesssss</button>
                <button onClick={handleNoButtonClick} className='px-4 py-2 bg-gray-400 text-white text-xl font-medium rounded-[8px] transition-all duration-200 ease-in-out' style={{ transform: `scale(${shrinkCount})` }}>No, sorry</button>
            </div>
        </div>
        <div className="col-span-1 self-center items-center justify-center hidden lg:flex">
        { convincingTextsNumber > 0 && convincingTextsNumber < 2 && (
            <img src={puppyDogGif} alt="puppy-dog-eyes GIF" className="w-[250px] lg:w-[400px] transition-all duration-300 ease-in-out" />
        )}
        { convincingTextsNumber > 1 && (
            <img src={aloneGif} alt="puppy-dog-eyes GIF" className="w-[230px] lg:w-[390px] transition-all duration-300 ease-in-out" />
        )}
        { convincingTextsNumber === 0 && (
            <img src={kissesGif} alt="Two cats kissing GIF" className="w-[400px] lg:w-[600px] transition-all duration-300 ease-in-out" />
        )}
        </div>
    </section>
  )
}

export default BeMyVal