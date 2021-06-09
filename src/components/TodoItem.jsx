import React from 'react';

const TodoItem = ({content, removeTodoItem}) => {

    return (
        <div className="todo-item">
            {content}
            <button
                onClick={removeTodoItem}
                className="btn-floating waves-effect waves-light red">
                <i className="remove-btn material-icons">clear</i>
            </button>
        </div>
    );
}

export default TodoItem;