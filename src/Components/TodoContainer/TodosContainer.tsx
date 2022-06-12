import {useState, KeyboardEvent} from "react";
import style from './Todos.module.css'
import {v1} from "uuid";
import Task from "../Task/Task";
import Filters from "../Filter/Filters";


export type TodosType = {
    id: string,
    done: boolean,
    title: string
}
export type FilterType="All"|"Completed"|'Clear Completed'|"Active";

const TodosContainer = () => {
    let [filter,setFilter]=useState<FilterType>('All')
    let [todos, setTodos] = useState<Array<TodosType>>([])
    let [showTasks, setShowTasks] = useState(true)
    let [title, setTitle] = useState('')
    let [err,setErr]=useState('')
    let tasks:Array<TodosType>=[]

    const changeFilter=(value:FilterType)=>{
        setFilter(value)

    }
    const addTask = (title: string) => {
        setTodos([...todos, {id: v1(), done: false, title}])
        setShowTasks(true)
        setFilter('All')
        setTitle('')
    }
    const onKeyPressBtn = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode == 13&&title!=='') {
            addTask(title.trim())
            setErr('')
        }else if (title==''){
            setErr('Field is empty')
        }
    }
    const changeValueInput=(title:string)=>{
        setTitle(title)
        setErr('')
    }
    const changeCheck = (id: string) => {
        setTodos(todos.map((item) => item.id === id ? {...item, done: !item.done} : item))
    }
    const clearCompleted=()=>{
       tasks=todos.filter((item)=>item.done===false)
       setTodos(tasks)
    }
    if (filter==='All'){
        tasks=todos
    }else if (filter==='Active'){
        tasks=todos.filter((item)=>item.done===false)
    }else if (filter==='Completed'){
        tasks=todos.filter((item)=>item.done===true)
    }
    return (

        <div className={style.todos}>
            <h1>Todos</h1>
            <div className={style.cart}>

                <div className={showTasks ? style.inputs : style.notShow}>
                    <input onClick={() => {
                        setShowTasks(!showTasks)
                        setErr('')
                    }} type='submit' value=''/>
                    <input placeholder={'Whats needs to be done?'} onKeyPress={onKeyPressBtn}
                           onChange={(e) =>changeValueInput(e.currentTarget.value)}
                           value={title}
                           type="text"/>
                </div>
                <p className={style.error}>{err!==''&&err}</p>
                {tasks && showTasks &&tasks.map((item) => {
                    return <Task
                        key={item.id}
                        id={item.id}
                        done={item.done}
                        title={item.title}
                        changeCheck={changeCheck}
                    />
                })}
            </div>

            <Filters changeFilter={changeFilter}
                     clearCompleted={clearCompleted}
                     data={todos}/>
        </div>
    );
};

export default TodosContainer;

