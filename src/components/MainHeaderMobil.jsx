import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { useSelector } from 'react-redux';
const MainHeaderMobil = () => {
    const acilis = useSelector((state) => state.open.value)
    return (


        <div className={`z-50 flex justify-start items-end ${acilis?"h-[20%]":"h-full"}  w-full bg-white`}>
            
            <div className={` ${acilis ? "h-full" : "h-full"} w-full flex justify-center items-center `}>
            
                <div className='sec1 flex justify-center items-center h-full w-full'>

                    <div className='sec11 p-8 flex justify-center items-center h-full w-full'>
                        <div className='p-2 border-r-[0.07rem] border-stone-700'>
                            <AiOutlineInstagram className='text-stone-700 w-[1.5rem] h-[1.5rem] ' />
                        </div>
                        <div className='p-2 border-r-[0.07rem] border-l-[0.07rem] border-stone-700'>
                            <AiOutlineTwitter className='text-stone-700 w-[1.5rem] h-[1.5rem] ' />
                        </div>
                        <div className='p-2 border-l-[0.07rem] border-stone-700'>
                            <BiLogoFacebook className='text-stone-700 w-[1.5rem] h-[1.5rem] ' />
                        </div>
                    </div>


                </div>
                <div className='sec2 flex justify-center items-center h-full w-full max-2xl:hidden'>

                    {/* bbbbbbbbbbbbbbbbb */}
                </div>


                <div className='sec3 flex justify-center items-center h-full w-full'>

                    <div className='sec32 p-8  flex justify-center items-center h-full w-full '>
                        <div className='p-2'>
                            <BiSolidPhoneCall className='text-stone-700 w-[1.5rem] h-[1.5rem]' />
                        </div>
                        <div className='flex justify-center items-center text-center p-2 w-content border-r-[0.14rem] border-stone-700'>
                            <p className='flex justify-center items-center text-center  text-stone-700 font-semibold text-[0.5rem] max-xs:hidden h-[1.5rem]'>+90 555 111 23 23</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>


    )
}

export default MainHeaderMobil