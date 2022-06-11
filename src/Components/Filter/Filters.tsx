import React from 'react';
import {FilterType, TodosType} from "../TodoContainer/TodosContainer";
import Btn from "../Button/Btn";
import style from './Filters.module.css'
type FiltersType={
    data:Array<TodosType>,
    changeFilter:(filter:FilterType)=>void
    clearCompleted?:()=>void
}
const Filters = (props:FiltersType) => {
    let l=props.data.length;
    return (
        <div className={style.filters}>
            <span>{l>1?l+' Items left':l+ ' Item left'}</span>
            <div>
                <Btn changeFilter={props.changeFilter} title={'All'}/>
                <Btn changeFilter={props.changeFilter} title={'Active'}/>
                <Btn changeFilter={props.changeFilter} title={'Completed'}/>
            </div>
            <Btn changeFilter={props.clearCompleted} title={'Clear Completed'}/>
        </div>
    );
};

export default Filters;