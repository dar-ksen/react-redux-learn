import React from 'react';

const Container = ({title, children}) => {
    return (
        <section className="reducer_item">
            <h3 className="center-align white-text blue">{title}</h3>
            {children}
        </section>
    )
}

export default Container;