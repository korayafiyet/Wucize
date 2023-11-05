import React from 'react'
import { GrLocation } from 'react-icons/gr';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { LuMail } from 'react-icons/lu';
import { RiArrowRightDoubleFill } from 'react-icons/ri';

import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
const MainFooterMobil = () => {
    return (
        <div className='flex justify-center items-center h-content w-full bg-altgri'>
            <div className='flex flex-col justify-center items-center h-full w-full '>
                {/*  */}
                <div className='flex justify-center items-center h-full w-full bg-karelaci lg:hidden'>
                    <div className='flex flex-col justify-center items-center h-full w-full'>
                        <div className='flex justify-center items-center h-full w-full'>
                            <img src="/images/reward.svg" className='w-[12rem] h-[12rem]' alt="" />
                            <div className='flex flex-col justify-center items-start text-start h-full w-full text-white font-bold text-md'>
                                <h2>25+</h2>
                                <h2>Yıllık Deneyim </h2>
                            </div>
                        </div>
                        <div className='flex justify-center items-center h-[0.2rem] w-[70%] bg-white'></div>

                        <div className='flex justify-center items-center h-full w-full'>
                            <img src="/images/doc.svg" className='w-[12rem] h-[12rem]' alt="" />
                            <div className='flex flex-col justify-center items-start text-start h-full w-full text-white font-bold text-md'>
                                <h2>5,000+</h2>
                                <h2>Cerrahi Opreasyon </h2>
                            </div>
                        </div>
                        <div className='flex justify-center items-center h-[0.2rem] w-[70%] bg-white'></div>
                        <div className='flex justify-center items-center h-full w-full'>
                            <img src="/images/docpap.svg" className='w-[12rem] h-[12rem]' alt="" />
                            <div className='flex flex-col justify-center items-start text-start h-full w-full text-white font-bold text-md'>
                                <h2>40+</h2>
                                <h2>Ülke Sayısı </h2>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='text-stone-700 flex flex-col justify-center items-center h-full w-full xl:hidden my-[2rem]'>


                    <div className='flex  justify-center items-center h-fullw-full'>

                        <div className='flex flex-col justify-center items-center h-full w-[80%]'>

                            <div className='border-2  flex flex-col justify-center items-center h-[50%] w-[100%]'>
                                <h2 className='flex justify-start items-center h-[10%] w-full text-left font-bold'>HAKKIMIZDA</h2>
                                <p className='flex justify-start items-start h-full w-full text-left text-[60%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi sunt ratione pariatur, neque iure suscipit ipsa modi, accusantium sequi repellendus blanditiis dolor temporibus laboriosam, adipisci incidunt vitae minus expedita? Error.</p>
                            </div>
                            <div className='flex justify-center items-center h-[0.1rem] w-full bg-stone-700'></div>
                            <div className='flex flex-col justify-center items-center h-[15rem] w-[100%] '>

                                <div className='flex justify-center items-center h-[5rem] w-full'>
                                    <div className='flex justify-center items-center h-full w-content px-3'>
                                        <GrLocation className='h-[2rem] w-[2rem] text-stone-700' />
                                    </div>
                                    <div className='flex flex-col justify-center items-start h-full w-full text-start'>
                                        <p className='text-[60%]'>Zeytinlik Mah. Türkçü Sok. Ferah Palas</p>
                                        <p className='text-[60%]'>Apratman A Blok No:16 Daire:9 Kat:4</p>
                                        <p className='text-[60%]'>Bakırköy / İSTANBUL</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center h-[5rem] w-full'>
                                    <div className='flex justify-center items-center h-full w-content px-3'>
                                        <BiSolidPhoneCall className='h-[2rem] w-[2rem] text-stone-700' />
                                    </div>
                                    <div className='flex flex-col justify-center items-start h-full w-full text-start'>
                                        <p className='text-[60%]'>+90 535 12345 67</p>
                                        <p className='text-[60%]'>+90 535 12345 67</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center h-[5rem] w-full'>
                                    <div className='flex justify-center items-center h-full w-content px-3'>
                                        <LuMail className='h-[2rem] w-[2rem] text-stone-700' />
                                    </div>
                                    <div className='flex flex-col justify-center items-start h-full w-full text-start'>
                                        <p className='text-[60%]'>bilgi@dentalcare.com</p>
                                        <p className='text-[60%]'>info@dentalcare.com</p>
                                    </div>
                                </div>


                            </div>
                            <div className='flex justify-center items-center h-[0.1rem] w-full bg-stone-700'></div>
                            <div className=' flex flex-col justify-center items-center h-[50%] w-full'>

                                <h3 className='flex justify-start items-center h-[10%] w-[100%] text-left font-bold'>E-BÜLTEN</h3>
                                <p className='flex justify-start items-center h-[20%] w-[100%] text-left text-[70%]'>Haftalık haberler ve güncellemeler için kaydolun</p>
                                <p className='flex justify-start items-center h-[10%] w-[100%] text-left text-[70%]'>E-mail</p>
                                <div className='flex flex-col justify-start items-start h-full w-[100%]'>
                                    <div className='flex justify-between items-center h-[20%] w-[70%] '>
                                        <input className='w-[70%] text-center border-[0.1rem] border-stone-700' type="text" name="" id="" />
                                        <RiArrowRightDoubleFill cursor="pointer" className='w-[2rem] h-[2rem]' />
                                    </div>
                                    <div className='flex justify-center items-center h-[0.15rem] w-[70%] bg-stone-700 my-[0.5rem]'></div>
                                    <ul className='flex justify-start items-center h-[20%] w-[70%] '>
                                        <li className='flex justify-center items-center h-full w-[2rem]'><BiLogoFacebook className='w-[1.5rem] h-[1.5rem]' /></li>
                                        <li className='flex justify-center items-center h-full w-[2rem]'><AiOutlineTwitter className='w-[1.5rem] h-[1.5rem]' /></li>
                                        <li className='flex justify-center items-center h-full w-[2rem]'><AiOutlineInstagram className='w-[1.5rem] h-[1.5rem]' /></li>

                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>







                </div>
            </div>
        </div>

    )
}

export default MainFooterMobil