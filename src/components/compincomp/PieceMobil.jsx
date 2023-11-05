import React from 'react'
import { useDispatch } from 'react-redux';
import { wptrue1 } from '../../stores/stores/wp1';
import { wptrue2 } from '../../stores/stores/wp2';
import { wptrue3 } from '../../stores/stores/wp3';
import { wpfalse1 } from '../../stores/stores/wp1';
import { wpfalse2 } from '../../stores/stores/wp2';
import { wpfalse3 } from '../../stores/stores/wp3';
import { down } from '../../stores/stores/open';
import { useSelector } from 'react-redux'
const PieceMobil = () => {
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

    }
    const acilis = useSelector((state) => state.open.value)
    return (
        <ul className={`flex  justify-around items-center h-full w-[50%] my-[2rem] ${acilis ? "hidden" : ""}`}>
            <li onClick={say1} className={` cursor-pointer flex justify-center items-center w-[1.5rem] h-[1.5rem] rounded-full duration-500 bg-blue-400 ${wpkay1 ? "border-[0.1rem] border-black" : ""}`}></li>

            <li onClick={say2} className={` cursor-pointer flex justify-center items-center w-[1.5rem] h-[1.5rem] rounded-full duration-500 bg-blue-400 ${wpkay2 ? "border-[0.1rem] border-black" : ""}`}></li>
            <li onClick={say3} className={` cursor-pointer flex justify-center items-center w-[1.5rem] h-[1.5rem] rounded-full duration-500 bg-blue-400 ${wpkay3 ? "border-[0.1rem] border-black" : ""}`}></li>

        </ul>
    )
}

export default PieceMobil