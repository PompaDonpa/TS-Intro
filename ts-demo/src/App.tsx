import React from 'react';
import './App.css';
import New from './components/New'
import List from './components/List'


export interface Todo{
  title:string;
  text:string;
}

const data:Todo[] = [
  {title:"Doggy Walk", text:"Walk rubio around the Hood"},
  {title:"Debug", text: "Pay technical debt"},
  {title:"Order Food", text:"Check new coffee brands"}
]

function App() {

  const [todos, setTodos] = React.useState<Todo[]>(data)

  const newTodo = (todo:Todo) => {
    const allTodos = [...todos, todo]
    setTodos(allTodos)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <New addTodo = {newTodo}/>
      <List todos = {todos}/>
    </div>
  );
}

export default App;
