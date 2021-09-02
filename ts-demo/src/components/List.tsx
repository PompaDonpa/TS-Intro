import React from 'react';
import { Todo }from '../App'

interface IListProps { 
    todos:Todo[]
}

const List = (props:IListProps) => {
    return (
        <div className = "list">
            <div id="description">
                <h2>Title</h2>
                <h2>Description</h2>
            </div>
            {props.todos.map((todo, idx) =>{
                return(
                        <p>
                            <span className="title">{todo.title}</span>
                            <span className="text">{todo.text}</span>
                        </p>
                )
            })}
        </div>
    );
};

export default List;
