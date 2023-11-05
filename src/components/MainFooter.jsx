import React from 'react'
import { GrLocation } from 'react-icons/gr';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { LuMail } from 'react-icons/lu';
import { RiArrowRightDoubleFill } from 'react-icons/ri';

import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';


const MainFooter = () => {
    return (
        <div className='flex justify-center items-center h-content w-full bg-altgri'>
            <div className='flex flex-col justify-center items-center h-full w-full '>
                {/*  */}
                <div className='flex justify-center items-center h-[45%] w-full bg-karelaci max-lg:hidden'>


                    <div className='flex justify-center items-center h-full w-full pt-5 pb-5'>
                        <div className='flex justify-center items-center  h-full w-full border-r-[0.24rem] border-white'>
                            <div className='flex justify-start items-center  h-full w-[80%]'>
                                <img src="/images/reward.svg" className='w-[15rem] h-[15rem]' alt="" />
                                <div className='flex flex-col justify-center items-start text-start h-full w-full text-white font-bold text-2xl'>
                                    <p>25+</p>
                                    <p>Yıllık Deneyim </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-center items-center h-full w-full pt-5 pb-5'>
                        <div className='flex justify-start items-center  h-full w-[80%]'>
                            <img src="/images/doc.svg" className='w-[15rem] h-[15rem]' alt="" />
                            <div className='flex flex-col justify-center items-start text-start h-full w-full text-white font-bold text-2xl' >
                                <p>5,000+</p>
                                <p>Cerrahi Operasyon</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center h-full w-full pt-5 pb-5'>
                        <div className='flex justify-center items-center  h-full w-full border-l-[0.24rem] border-white'>
                            <div className='flex justify-start items-center  h-full w-[80%]'>
                                <img src="/images/docpap.svg" className='w-[15rem] h-[15rem]' alt="" />
                                <div className='flex flex-col justify-center items-start text-start h-full w-full text-white font-bold text-2xl'>
                                    <p>40+</p>
                                    <p>Ülke Sayısı </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* ////////////////////////////////////////////////////////////////// */}







                {/* //////////////////////////////////////////////////////////////////////////////////// */}





                <div></div>








                {/* //////////////////////////////////////////////////////////////////////////////////// */}










                <div className='text-stone-700 flex justify-center items-start h-full w-full  max-xl:hidden my-[10rem]'>
                    <div className='flex flex-col justify-center items-center h-full w-1/3 text-sm'>
                        <p className='flex justify-start items-center h-[10%] w-[40%] text-left font-bold'>HAKKIMIZDA</p>
                        <p className='flex justify-start items-start h-full w-[40%] text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elexcepturi. Nostrum qui consequuntur odio dolore nulla placeat accusamus.Lorem, Animi sunt ratione pariatur, neque iure suscipit ipsa modi, accusantium sequi repellendus blanditiis dolor temporibus laboriosam, adipisci incidunt vitae minus expedita? Error.</p>
                    </div>
                    <div></div>
                    <div className='flex justify-center items-center h-full w-1/3'>
                        <div className='flex flex-col justify-center items-center h-full w-[50%] mr-[10rem]'>

                            <div className='flex justify-center items-center h-[6rem] w-full'>
                                <div className='flex justify-center items-center h-full w-content px-3'>
                                    <GrLocation className='h-[2rem] w-[2rem] text-stone-700' />
                                </div>
                                <div className='flex flex-col justify-center items-start h-full w-full text-start text-sm'>
                                    <p>Zeytinlik Mah. Türkçü Sok. Ferah Palas</p>
                                    <p>Apratman A Blok No:16 Daire:9 Kat:4</p>
                                    <p>Bakırköy / İSTANBUL</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center h-[6rem] w-full'>
                                <div className='flex justify-center items-center h-full w-content px-3'>
                                    <BiSolidPhoneCall className='h-[2rem] w-[2rem] text-stone-700' />
                                </div>
                                <div className='flex flex-col justify-center items-start h-full w-full text-start text-sm'>
                                    <p>+90 535 12345 67</p>
                                    <p>+90 535 12345 67</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center h-[6rem] w-full'>
                                <div className='flex justify-center items-center h-full w-content px-3'>
                                    <LuMail className='h-[2rem] w-[2rem] text-stone-700' />
                                </div>
                                <div className='flex flex-col justify-center items-start h-full w-full text-start text-sm'>
                                    <p>bilgi@dentalcare.com</p>
                                    <p>info@dentalcare.com</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-center h-[60%] w-1/3 text-sm '>

                        <p className='flex justify-center items-center h-[10%] w-full text-left font-bold'>E-BÜLTEN</p>
                        <p className='flex justify-start items-center h-[20%] w-[60%] text-left'>Haftalık haberler ve güncellemeler için kaydolun</p>
                        <p className='flex justify-start items-center h-[10%] w-[60%] text-left'>E-mail</p>
                        <div className='flex flex-col justify-start items-start h-full w-[60%]'>
                            <div className='flex justify-between items-center h-[20%] w-[60%] border-b-2 border-stone-700'>
                                <input className='w-[70%] text-center border-[0.1rem] border-stone-700' type="text" name="" id="" />
                                <RiArrowRightDoubleFill cursor="pointer" className='w-[2rem] h-[2rem]' />
                            </div>
                            <ul className='flex justify-start items-center h-[20%] w-[60%] '>
                                <li className='flex justify-center items-center h-full w-[2rem]'><BiLogoFacebook className='w-[1.5rem] h-[1.5rem]' /></li>
                                <li className='flex justify-center items-center h-full w-[2rem]'><AiOutlineTwitter className='w-[1.5rem] h-[1.5rem]' /></li>
                                <li className='flex justify-center items-center h-full w-[2rem]'><AiOutlineInstagram className='w-[1.5rem] h-[1.5rem]' /></li>

                            </ul>
                        </div>

                    </div>




                </div>


                {/* mobil en alt */}



            </div>
        </div>
    )
}

export default MainFooter