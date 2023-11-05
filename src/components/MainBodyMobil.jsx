import React from 'react'
import Surgery from './compincomp/Surgery'
import Surgerymeme from './compincomp/Surgerymeme'
import Surgeryvucut from './compincomp/Surgeryvucut'
import surg1 from '../stores/stores/surg1'
import surg2 from '../stores/stores/surg2'
import surg3 from '../stores/stores/surg3'
import { true1 } from '../stores/stores/surg1'
import { true2 } from '../stores/stores/surg2'
import { true3 } from '../stores/stores/surg3'
import { false1 } from '../stores/stores/surg1'
import { false2 } from '../stores/stores/surg2'
import { false3 } from '../stores/stores/surg3'
import tts1 from '../stores/stores/tts1'
import tts2 from '../stores/stores/tts2'
import tts3 from '../stores/stores/tts3'
import { ttstrue1 } from '../stores/stores/tts1'
import { ttstrue2 } from '../stores/stores/tts2'
import { ttstrue3 } from '../stores/stores/tts3'
import { ttsfalse1 } from '../stores/stores/tts1'
import { ttsfalse2 } from '../stores/stores/tts2'
import { ttsfalse3 } from '../stores/stores/tts3'
import { useState } from 'react'
import SurgeryMobil from './compincomp/Surgerymobil'
import Surgerymememobil from './compincomp/Surgerymememobil'
import Surgeryvucutmobil from './compincomp/Surgeryvucutmobil'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const MainBodyMobil = () => {
    const dispatch = useDispatch();
    const hizmet1 = useSelector((state) => state.surg1.value)
    const hizmet2 = useSelector((state) => state.surg2.value)
    const hizmet3 = useSelector((state) => state.surg3.value)
    const althizmet1 = useSelector((state) => state.tts1.value)
    const althizmet2 = useSelector((state) => state.tts2.value)
    const althizmet3 = useSelector((state) => state.tts3.value)


    const [x, setX] = useState("visible");
    const [y, setY] = useState("hidden");
    const [z, setZ] = useState("hidden");
    const yüz = () => {
        dispatch(true1())
        dispatch(false2())
        dispatch(false3())
        setX(x => "opacity-100")
        setY(y => "opacity-0 absolute")
        setZ(z => "opacity-0 absolute")

    }
    const meme = () => {
        dispatch(true2())
        dispatch(false1())
        dispatch(false3())
        setX(x => "opacity-0 absolute")
        setY(y => "opacity-100")
        setZ(z => "opacity-0 absolute")

    }
    const vücut = () => {
        dispatch(true3())
        dispatch(false1())
        dispatch(false2())
        setX(x => "opacity-0 absolute")
        setY(y => "opacity-0 absolute")
        setZ(z => "opacity-100")
    }









    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    const [c, setC] = useState(3);
    const [yol, setYol] = useState(0)



    const tts_bir = () => {
        dispatch(ttstrue1())
        dispatch(ttsfalse2())
        dispatch(ttsfalse3())
        setA(a => 1)
        setB(b => 2)
        setC(c => 3)
        setYol(yol => 1)

    }
    const tts_iki = () => {
        dispatch(ttstrue2())
        dispatch(ttsfalse1())
        dispatch(ttsfalse3())

        setA(a => 4)
        setB(b => 5)
        setC(c => 6)
        setYol(yol => 2)

    }
    const tts_uc = () => {
        dispatch(ttstrue3())
        dispatch(ttsfalse1())
        dispatch(ttsfalse2())
        setA(a => 7)
        setB(b => 8)
        setC(c => 9)
        setYol(yol => 3)


    }
    const acilis = useSelector((state) => state.open.value)
    return (
        <div className={`flex justify-center items-center h-full w-full bg-üstgri  ${acilis?"":""}`}>
            <div className='flex flex-col justify-center items-center h-full w-full container'>
                <div className='flex justify-center items-center h-full w-full'>
                    <p className='font-hizmet text-stone-700 text-[2rem] border-b-[0.1rem] border-karelaci'>Hizmetlerimiz</p>
                </div>
                
                <div className='flex justify-center items-center h-full w-full my-[2rem] z-50'>
                    <ul className='font-bold text-stone-700 flex justify-around items-center h-full w-[90%] z-50'>
                        <li onClick={yüz} className={`flex cursor-pointer justify-center items-center  w-[4rem] h-[1.5rem] duration-500 ${hizmet1 ? "bg-karelaci rounded-md text-white" : "hover:text-karelaci duration-300 cursor-pointer"} `}>Yüz</li>
                        <li onClick={meme} className={`flex cursor-pointer justify-center items-center  w-[4rem] h-[1.5rem] duration-500 ${hizmet2 ? "bg-karelaci rounded-md text-white" : "hover:text-karelaci duration-300 cursor-pointer"} `}>Meme</li>
                        <li onClick={vücut} className={`flex cursor-pointer justify-center items-center  w-[4rem] h-[1.5rem] duration-500 ${hizmet3 ? "bg-karelaci rounded-md text-white" : "hover:text-karelaci duration-300 cursor-pointer"} `}>Vücut</li>
                    </ul>
                </div>
                
                {/*  */}
                <div className='flex justify-center items-center h-full w-[80%] '>
                    <div className={`${x} duration-1000`}><SurgeryMobil sayi1={a} sayi2={b} sayi3={c} yol={yol} /></div>
                    <div className={`${y} duration-1000`}><Surgerymememobil sayi1={a} sayi2={b} sayi3={c} yol={yol} /></div>
                    <div className={`${z} duration-1000`}><Surgeryvucutmobil sayi1={a} sayi2={b} sayi3={c} yol={yol} /></div>



                </div>
                {/*  */}
                <div className='flex justify-center items-center h-full w-full my-[2rem]'>
                    <ul className='flex justify-around items-center h-full w-[50%] '>
                        <li onClick={tts_bir} className={` cursor-pointer flex justify-center items-center w-[1rem] h-[1rem] rounded-full duration-500 bg-karelaci ${althizmet1 ? "border-[0.1rem] border-black" : ""}`}></li>
                        <li onClick={tts_iki} className={`cursor-pointer flex justify-center items-center w-[1rem] h-[1rem] rounded-full duration-500 bg-karelaci ${althizmet2 ? "border-[0.1rem] border-black" : ""}`}></li>
                        <li onClick={tts_uc} className={`cursor-pointer flex justify-center items-center w-[1rem] h-[1rem] rounded-full duration-500 bg-karelaci ${althizmet3 ? "border-[0.1rem] border-black" : ""}`}></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainBodyMobil