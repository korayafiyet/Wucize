import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import wp1 from '../stores/stores/wp1';
import wp2 from '../stores/stores/wp2';
import wp3 from '../stores/stores/wp3';
import { wptrue1 } from '../stores/stores/wp1';
import { wptrue2 } from '../stores/stores/wp2';
import { wptrue3 } from '../stores/stores/wp3';
import { wpfalse1 } from '../stores/stores/wp1';
import { wpfalse2 } from '../stores/stores/wp2';
import { wpfalse3 } from '../stores/stores/wp3';
const MainBodyHead = () => {
    const dispatch = useDispatch();
    const wpkay1 = useSelector((state) => state.wp1.value)
    const wpkay2 = useSelector((state) => state.wp2.value)
    const wpkay3 = useSelector((state) => state.wp3.value)


    const say1 = () => {
        dispatch(wptrue1())
        dispatch(wpfalse2())
        dispatch(wpfalse3())


    }
    const say2 = () => {
        dispatch(wptrue2())
        dispatch(wpfalse1())
        dispatch(wpfalse3())


    }
    const say3 = () => {
        dispatch(wptrue3())
        dispatch(wpfalse1())
        dispatch(wpfalse2())

    }



    return (
        <div className='z-40 flex flex-col justify-center items-center h-full w-full '>
            <div className='flex  justify-center items-center h-[93vh] w-full  max-lg:hidden'>



                <div className={`gorsel bg-surg flex justify-center items-center h-full w-full duration-700 ${wpkay1?"bg-surgery1":""} ${wpkay2?"bg-surgery111":""} ${wpkay3?"bg-surgery222":""} bg-no-repeat bg-top max-md:bg-center `}>
                    {/*  */}
                    <div className='flex justify-center items-center h-full w-full mt-[2rem] '>
                        {/*  */}
                        <div className='flex justify-start items-start h-full w-full'>
                            <div className='flex justify-center items-center rounded-full h-[7rem] w-[7rem]  bg-kirmizidaire ml-[2rem]'></div>
                        </div>

                        <ul className='flex justify-around items-start h-full w-[200%] text-stone-700 font-bold'>
                            <li className='flex justify-center items-center h-[2rem] w-content hover:text-white duration-300 cursor-pointer'>ANASAYFA</li>
                            <li className='flex justify-center items-center h-[2rem] w-content hover:text-white duration-300 cursor-pointer'>HAKKIMIZDA</li>
                            <li className='flex justify-center items-center h-[2rem] w-content hover:text-white duration-300 cursor-pointer text-blue-900'>HİZMETLERİMİZ</li>
                            <li className='flex justify-center items-center h-[2rem] w-content hover:text-white duration-300 cursor-pointer'>EKİBİMİZ</li>
                            <li className='flex justify-center items-center h-[2rem] w-content hover:text-white duration-300 cursor-pointer'>BLOG</li>
                            <li className='flex justify-center items-center h-[2rem] w-content hover:text-white duration-300 cursor-pointer'>İLETİŞİM</li>

                        </ul>
                        <div className='flex justify-center items-start h-full w-full'>
                            <div className='flex justify-end items-start h-full w-[150%]'>
                                <BiSearch className='h-[1.5rem] w-[1.5rem] text-stone-700 ' />
                            </div>
                            <div className='flex justify-center items-center mx-[0.7rem] w-[0.15rem] h-[1.5rem] bg-stone-700'>

                            </div>
                            <div className='flex justify-start items-start h-full w-[50%]'>
                                <div className='flex justify-center items-center h-[1.5rem] w-[4rem] text-white bg-blue-400 hover:text-stone-700 hover:bg-transparent duration-300 cursor-pointer'>
                                    <p className='text-[0.55rem] font-bold'>RANDEVU AL</p>

                                </div>
                                <ul className='flex flex-col justify-center items-center h-full w-content'>
                                    <li onClick={say1} className={`my-[0.5rem] cursor-pointer flex justify-center items-center w-[1rem] h-[1rem] rounded-full duration-500 bg-karelaci ${wpkay1 ? "border-[0.1rem] border-black" : ""}`}></li>
                                    <li onClick={say2} className={`my-[0.5rem] cursor-pointer flex justify-center items-center w-[1rem] h-[1rem] rounded-full duration-500 bg-karelaci ${wpkay2 ? "border-[0.1rem] border-black" : ""}`}></li>
                                    <li onClick={say3} className={`my-[0.5rem] cursor-pointer flex justify-center items-center w-[1rem] h-[1rem] rounded-full duration-500 bg-karelaci ${wpkay3 ? "border-[0.1rem] border-black" : ""}`}></li>

                                </ul>
                            </div>



                        </div>

                    </div>

                </div>


                <div class=" custom-shape-divider-bottom-1699041665 ">

                    <svg className='' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

                        <path className='' d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>

                    </svg>

                </div>




            </div>



        </div>
    )
}

export default MainBodyHead