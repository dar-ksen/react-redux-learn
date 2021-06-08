import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector( state => state.counter.count);

    const dispatch = useDispatch();

    return (
        <section id="section-counter">
            <h3 className="center-align white-text blue">Simple Counter</h3>
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
     
        </section>
    )
}

export default Counter;