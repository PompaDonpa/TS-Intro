import React from 'react';
import { Todo } from "../App"


interface INewProps {
    addTodo:Function;
}

const New = (props:INewProps) => {

    const [newText, setNewText] = React.useState<string>('');
    const [newTitle, setNewTitle] = React.useState<string>('');


    const handleText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        let change = e.target.value;
        setNewText(change)
    }
    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        let change = e.target.value;
        setNewTitle(change)
    }


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let newTodo:Todo = { title: newTitle, text: newText}
        props.addTodo(newTodo)
        setNewText('')
        setNewTitle('')
    }

    const handleCancel = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setNewText('')
        setNewTitle('')
    }
    return (
        <div className="todoForm">
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTitle} placeholder="Title here..." onChange={handleTitle} />
                <textarea  value={newText} placeholder="Description here..." onChange={handleText}></textarea>
                <div>
                <button type="submit">add new</button>
                <button onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default New;
