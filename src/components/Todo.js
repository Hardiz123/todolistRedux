import React from 'react'
const  Todo = (props) => {



    return (
        <div>
            <div onClick={() => props.editTaskfunc(props.id, props.task)} style={{display:'inline-block', marginRight:'5px'}}>
                <p>{props.task}</p>
            </div>
            <button onClick={() => props.deleteTask()}>X</button>
        </div>
    )
}

export default Todo;


