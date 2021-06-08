import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../components/TodoItem";

const TodoList = () => {
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
    <section id="section-todo">
      <h3 className="center-align white-text blue">Todo List</h3>
        <ul className="collection">
          {todoList.map((item) => {
            return <TodoItem {...item} removeTodoItem={removeTodoItem} />;
          })}
        </ul>
      {todoList.length === 0 && <p className="center-align">You don't have anything to do! Awesome!</p>}

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
    </section>
  );
};

export default TodoList;
