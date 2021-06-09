import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({todoList, removeTodoItem}) => {

  if (todoList.length === 0) {
    return <p className="center-align">You don't have anything to do! Awesome!</p>
  }

  return (
    <ul className="collection">
          {todoList.map((item) => {
              const {id, ...content} = item;
              return (
              <li className="collection-item" key={id}>
                <TodoItem {...content} removeTodoItem={() => removeTodoItem(id)} />
              </li>
              )
          })}
    </ul>
  )
}

const TodoContainer = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleInput = (e) => {
    setInputTodo(e.target.value);
  };

  const addNewTodo = () => {
    if (inputTodo.trim().length > 1) {
      setErrMsg("");
      let newTodoObject = {
        id: Math.random(),
        content: inputTodo,
      };
      dispatch({ type: "ADD_TODO", payload: newTodoObject });
      setInputTodo("");
    } else {
      setErrMsg("Please input something...");
    }
  };

  const removeTodoItem = (todoId) => {
    let newTodoList = todoList.filter(item => item.id !== todoId);
    dispatch({type: 'REMOVE_TODO', payload: newTodoList})
   }

  return (
    <Fragment>
        
      <TodoList todoList={todoList} removeTodoItem={removeTodoItem}/>
      <div className="row">
        <p className="red-text err-msg col s12 center-align">{errMsg}</p>
        <div className="input-field col s10">
          <input
            onChange={handleInput}
            value={inputTodo}
            placeholder="Add todo..."
            id="todo-input"
            type="text"
          />
          <label htmlFor="todo-input" className="active">
            New Todo
          </label>
        </div>

        <button className="btn col s2 blue" onClick={addNewTodo}>
          Add
        </button>
      </div>
    </Fragment>
  );
};

export default TodoContainer;
