import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { FiChevronsDown } from 'react-icons/fi';
import { FiChevronsUp } from 'react-icons/fi';
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

import open from '../stores/stores/open';
import { down } from '../stores/stores/open';


const MainBodyHeadMobil = () => {
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

    const acil = () => {
        dispatch(down())
        console.log(acilis)
    }
    const acilis = useSelector((state) => state.open.value)
    return (
        <div className='z-40 flex flex-col justify-center items-center h-full w-full '>
            <div className={`z-50 flex justify-center items-center h-[5vh] w-full ${acilis ? "bg-white" : "bg-surg"} z-50`}>
                <FiChevronsDown onClick={acil} className={`z-50 text-stone-700 w-[2rem] h-[2rem] ${acilis ? "hidden" : ""}`} />
                <FiChevronsUp onClick={acil} className={`z-50 text-stone-700 w-[2rem] h-[2rem]  ${acilis ? "bg-blue-400 duration-500 text-white w-full h-full" : "duration-500 hidden"}`} />
            </div>

            <div className={`flex  justify-center items-center duration-700 ${acilis ? "h-[0vh]" : "h-[85vh]"} w-full `}>


                <div className={`gorselmob bg-surg flex justify-center items-start h-full w-full duration-700 ${wpkay1 ? "bg-surgery1 " : ""} ${wpkay2 ? "bg-surgery22 " : ""} ${wpkay3 ? "bg-surgery33 " : ""} ${acilis ? "opacity-0 duration-300" : "opacity-100 duration-700"} bg-no-repeat bg-top max-md:bg-center `}>

                    <div className=' absolute rounded-3xl w-[65%] h-[40%] bg-opacity-50 flex justify-center items-center bg-karelaci z-50'>
                        <div className='flex flex-col justify-center items-center h-full w-full text-center '>
                            <p className='text-[1.4rem] text-white'>GÜZELLİĞİN</p>
                            <p className='text-[1.4rem] text-white'>KALBİNE</p>
                            <p className='text-[1.4rem] text-white'>HOŞGELDİNİZ!</p>
                            <br />
                            <p className='w-[75%] text-[0.6rem] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea, architecto tenetur accusantium excepturi velit commodi facilis aspernatur quae vel? Quae error ad deleniti alias quam odit. Veritatis, quasi officia.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainBodyHeadMobil