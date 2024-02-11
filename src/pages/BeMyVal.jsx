import { useState } from 'react';
import { convincingTexts } from '../assets/constants'
import puppyDogGif from '../assets/peach-goma-peach-and-goma.gif'

const BeMyVal = () => {
    const [convincingTextsNumber, setConvincingTextsNumber] = useState(0);
    const [growCount, setgrowCount] = useState(1);
    const [shrinkCount, setShrinkCount] = useState(1)
    
    const handleNoButtonClick = () => {
        if(convincingTextsNumber < 20){
            setConvincingTextsNumber((prev)  => prev + 1);
        } else{
            setConvincingTextsNumber(1);
        }
        if(growCount < 2.5){
            setgrowCount((prev)  => prev + 0.1);
            setShrinkCount((prev)  => prev - 0.05);
        }
    }
    const handleYesButtonClick = () => {
        setConvincingTextsNumber(1);
        setShrinkCount(1);
        setgrowCount(1);
    }
  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0 bg-white pt-[93px] my-8 lg:mt-0">
        <div className="col-span-1 h-full flex flex-col items-center justify-center px-3 lg:px-8">
            <h1 className='max-w-[100%] text-center text-4xl lg:text-6xl text-black font-pacifico'>With every beat of my heart, I ask: will you be my Valentine?</h1>
            {/* <p className='text-[12px] text-black/90 font-mont text-center text-wrap mt-3'>In the grand ballroom of life, where each step is a dance and each heartbeat a melody, I find myself entranced by the thought of you. Your grace, your warmth, your presence - they light up my world like a thousand twinkling stars. And so, as the music of love fills the air, I extend my hand and ask: would you honor me with your presence as my Valentine this year?</p>
            <p className='max-w-[500px] text-[12px] text-black/90 font-mont text-center text-wrap'>Together, let's waltz through the pages of our love story and paint the skies with the colors of our affection. Will you be my Valentine?</p> */}
            <p className='mt-8 text-sm text-center text-black/90 font-mont max-w-md'>{convincingTexts[convincingTextsNumber]}</p>
            <div className="w-full flex items-center justify-center gap-3 mt-8">
                <button onClick={handleYesButtonClick} className={`px-4 py-2 bg-pink-500 text-white text-xl font-medium rounded-[8px] transition-all duration-200 ease-in-out`} style={{ transform: `scale(${growCount})` }}>Yesssss</button>
                <button onClick={handleNoButtonClick} className='px-4 py-2 bg-gray-400 text-white text-xl font-medium rounded-[8px] transition-all duration-200 ease-in-out' style={{ transform: `scale(${shrinkCount})` }}>No, sorry</button>
            </div>
        </div>
        <div className="col-span-1 self-center flex items-center justify-center">
        <img src={puppyDogGif} alt="puppy-dog-eyes GIF" className="w-[250px] lg:w-[400px]" />
        </div>
    </section>
  )
}

export default BeMyVal