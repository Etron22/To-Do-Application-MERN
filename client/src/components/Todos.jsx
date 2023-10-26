

import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
//component
import Todo from "./Todo";

import {useDispatch,useSelector} from 'react-redux';
export const Todos=()=>{

    const dispatch=useDispatch();
    const todos=useSelector(state=>state.todos);
    useEffect(()=>{
        dispatch(getAllTodos());
    },[])
    return(
        <article>
            <ul>
                {
                    todos.map(todo=>(
                        <Todo
                            key={todo._id}
                            todo={todo}
                        
                        />
                    ))
                }
            </ul>
        </article>
    )


}
export default Todos;