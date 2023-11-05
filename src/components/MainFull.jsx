import React from 'react'
import MainHeader from './MainHeader'
import MainHeaderMobil from './MainHeaderMobil'
import MainBodyHead from './MainBodyHead'
import MainBody from './MainBody'
import MainBodyMobil from './MainBodyMobil'
import MainFooter from './MainFooter'
import MainFooterMobil from './MainFooterMobil'
import Piece from './compincomp/Piece'
import PieceMobil from './compincomp/PieceMobil'
import MainBodyHeadMobil from './MainBodyHeadMobil'
import { useSelector } from 'react-redux'
import { BiSearch } from 'react-icons/bi';
const MainFull = () => {
    const acilis = useSelector((state) => state.open.value)
    return (
        <div className={`justify-center items-center min-h-screen h-full w-full flex flex-col `}>
            {/*  */}
            <div className='flex justify-center items-center w-full h-[7vh] bg-white max-lg:hidden'>
                <MainHeader />
            </div>
            <div className={`flex flex-col justify-center items-center w-full duration-500 ${acilis ? "h-[95vh] " : "h-[10vh]"} bg-white lg:hidden`}>
                <div className={`flex justify-center items-start h-[5%] w-full duration-500 ${acilis ? "opacity-100" : "opacity-0 hidden"} mt-[2rem]`}>

                    <div>
                        <BiSearch className='w-[3rem] h-[3rem] text-stone-700' />
                    </div>
                    <div className='h-[3rem] w-[0.2rem] bg-stone-700 mx-[1rem]'></div>
                    <div className='h-[3rem] bg-blue-400 p-2 text-white font-bold w-content flex justify-center items-center cursor-pointer'>
                        <h3>RANDEVU AL</h3>
                    </div>
                </div>
                <div className={`flex justify-center items-center h-full w-full  ${acilis ? "" : "hidden"}`}>
                    <ul className='flex flex-col justify-around items-start text-xl h-[75%] w-content text-stone-700  font-bold p-10 rounded-xl'>
                        <li className='flex justify-center items-center h-[3rem] w-content hover:text-white duration-300 cursor-pointer '>ANASAYFA</li>
                        <li className='flex justify-center items-center h-[3rem] w-content hover:text-white duration-300 cursor-pointer'>HAKKIMIZDA</li>
                        <li className='flex justify-center items-center h-[3rem] w-content hover:text-white duration-300 cursor-pointer text-blue-900'>HİZMETLERİMİZ</li>
                        <li className='flex justify-center items-center h-[3rem] w-content hover:text-white duration-300 cursor-pointer'>EKİBİMİZ</li>
                        <li className='flex justify-center items-center h-[3rem] w-content hover:text-white duration-300 cursor-pointer'>BLOG</li>
                        <li className='flex justify-center items-center h-[3rem] w-content hover:text-white duration-300 cursor-pointer'>İLETİŞİM</li>

                    </ul>
                </div>
                <MainHeaderMobil />
            </div>
            {/*  */}
            {/*  */}
            <div className='flex justify-center items-center w-full min-h-[93vh] max-lg:hidden '>
                <MainBodyHead />
            </div>
            <div className='flex justify-center items-center w-full lg:hidden  '>
                <MainBodyHeadMobil />
            </div>
            {/*  */}
            {/*  */}
            <div className='flex justify-center items-center w-full max-lg:hidden'>
                <Piece />
            </div>
            <div className='flex justify-center items-center h-full w-full lg:hidden bg-üstgri'>
                <PieceMobil />
            </div>
            {/*  */}
            {/*  */}
            <div className='flex justify-center items-center w-full min-h-content mt-[13rem] max-lg:hidden'>
                <MainBody />
            </div>
            <div className='flex justify-center items-center w-full min-h-content  lg:hidden '>
                <MainBodyMobil />
            </div>
            {/*  */}
            {/*  */}
            <div className='flex justify-center items-center w-full h-full max-lg:hidden'>
                <MainFooter />
            </div>
            <div className='flex justify-center items-center w-full h-full lg:hidden'>
                <MainFooterMobil />
            </div>
            {/*  */}

        </div>
    )
}

export default MainFull