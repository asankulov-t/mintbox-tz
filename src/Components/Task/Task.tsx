import React from 'react';
import style from './Task.module.css'
type TaskPropsType={
    id:string,
    done:boolean,
    title:string,
    changeCheck:(id:string)=>void
}
const Task = (props:TaskPropsType) => {
    return (
        <div className={style.task}>
            <input onChange={()=>props.changeCheck(props.id)} checked={props.done} type="checkbox"/>
            <p className={props.done?style.done:style.notDone}>{props.title}</p>
        </div>
    );
};

export default Task;