import React from 'react';

const TodoItem = ({id, content, removeTodoItem}) => {

    return (
        <li className="collection-item" key={id}>
            {content}
            <span
                onClick={() => {
                removeTodoItem(id)
            }}
                className="secondary-content">
                <i className="remove-btn material-icons blue-text">clear</i>
            </span>
        </li>
    );
}

export default TodoItem;