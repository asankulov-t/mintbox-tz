import React, {useState} from 'react';
import {FilterType} from "../TodoContainer/TodosContainer";
import style from './Btn.module.css'
export type BtnType={
    title:FilterType,
    changeFilter?:(filter:FilterType)=>void
    clearCompleted?:()=>void
}
const Btn = (props:BtnType) => {
    let [active,setActive]=useState(false);

    const changeFilter=(title:FilterType)=>{
        props.changeFilter?props.changeFilter(title):props.clearCompleted&&props.clearCompleted()
        setActive(!active)
    }
    return <button onBlur={()=>setActive(false)} className={active?style.active:style.btn} onClick={()=>changeFilter(props.title)}>
        {props.title}
    </button>
};

export default Btn;