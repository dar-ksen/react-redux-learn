import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector( state => state.counter.count);

    const dispatch = useDispatch();

    return (
        <Fragment>
            <h5 className="center-align">{count}</h5>
            <div className="row counter-btns">
                <button className="btn-small blue" onClick={() => dispatch({ type: 'DOUBLE_COUNT' })}>
                x2
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'INCREMENT_COUNT_TEN' })}>
                +10
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'INCREMENT_COUNT' })}>
                +1
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'DECREMENT_COUNT' })}>
                -1
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'DECREMENT_COUNT_TEN' })}>
                -10
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'RESET_COUNT' })}>
                Reset
                </button>
            </div>
        </Fragment>
    )
}

export default Counter;