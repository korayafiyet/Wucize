import React from 'react'
import { FiChevronsRight } from 'react-icons/fi';
const Surgeryvucutmobil = ({ sayi1, sayi2, sayi3, yol }) => {
    return (
    <div className='flex flex-col justify-center items-center h-full w-full '>
            <div className={`ani${yol}  z-50 flex flex-col justify-center items-center h-[30rem] w-[20rem] bg-white rounded-md p-[1rem]`}>
                <div className='flex justify-center items-center text-center h-[20rem] w-[18rem] '>
                    <img className='flex justify-center items-center h-full' src={`/images/vuc${sayi1}.png`} alt="" />
                </div>
                <div className='flex flex-col justify-start items-center text-center h-[30%] w-full'>
                    <h5 className='font-semibold'>Vücut Estetiği</h5>
                    <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quo a! Quo, omnis ex. Nihil reprehenderit culpa corporis fugit error soluta! Suscipit distinctio dolore aut. Dolor nemo ratione ex dignissimos!</p>
                </div>
            </div>
            <div className={`ani${yol} z-50 flex justify-center items-center h-full w-full`}>
                <div className='absolute flex justify-center items-center w-[3rem] h-[3rem] rounded-full bg-white border-[0.15rem] border-stone-700'><FiChevronsRight className='h-[2rem] w-[2rem] text-stone-700'/></div>
            </div>
            <div className={`ani${yol} mt-[2rem] z-50 flex flex-col justify-center items-center h-[30rem] w-[20rem] bg-white rounded-md p-[1rem]`}>
                <div className='flex justify-center items-center text-center h-[20rem] w-[18rem] '>
                    <img className='flex justify-center items-center h-full' src={`/images/vuc${sayi2}.png`} alt="" />
                </div>
                <div className='flex flex-col justify-start items-center text-center h-[30%] w-full'>
                    <h5 className='font-semibold'>Vücut Estetiği</h5>
                    <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quo a! Quo, omnis ex. Nihil reprehenderit culpa corporis fugit error soluta! Suscipit distinctio dolore aut. Dolor nemo ratione ex dignissimos!</p>
                </div>
            </div>
            <div className={`ani${yol} z-50 flex justify-center items-center h-full w-full`}>
                <div className='absolute flex justify-center items-center w-[3rem] h-[3rem] rounded-full bg-white border-[0.15rem] border-stone-700'><FiChevronsRight className='h-[2rem] w-[2rem] text-stone-700'/></div>
            </div>
            <div className={`ani${yol} mt-[2rem] z-50 flex flex-col justify-center items-center h-[30rem] w-[20rem] bg-white rounded-md p-[1rem]`}>

                <div className='flex justify-center items-center text-center h-[20rem] w-[18rem] '>
                    <img className='flex justify-center items-center h-full' src={`/images/vuc${sayi3}.png`} alt="" />
                </div>
                <div className='flex flex-col justify-start items-center text-center h-[30%] w-full'>
                    <h5 className='font-semibold'>Vücut Estetiği</h5>
                    <p className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quo a! Quo, omnis ex. Nihil reprehenderit culpa corporis fugit error soluta! Suscipit distinctio dolore aut. Dolor nemo ratione ex dignissimos!</p>
                </div>
            </div>
            <div className={`ani${yol} z-50 flex justify-center items-center h-full w-full`}>
                <div className='absolute flex justify-center items-center w-[3rem] h-[3rem] rounded-full bg-white border-[0.15rem] border-stone-700'><FiChevronsRight className='h-[2rem] w-[2rem] text-stone-700'/></div>
            </div>
        </div>
  )
}

export default Surgeryvucutmobil