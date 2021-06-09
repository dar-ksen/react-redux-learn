import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux"
import EditNameCard from "./EditNameCard";

const NameCard = () => {
    const person = useSelector(state => state.characters);

    const [isEdit, setEdit] = useState(false);
    
    const toggleEditBtn = () => {
        setEdit(!isEdit);
    }

    return (
        <Fragment>
            <div className="card grey darken-1 namecard">
                <div className="card-content white-text">
                    <p className="card-title">{person.name}</p>
                    <p>Occupation: {person.occupation}</p>
                    <p>Age: {person.age}</p>
                    <button
                        onClick={toggleEditBtn}
                        className="btn-floating halfway-fab waves-effect waces-light orange"
                    >
                        {isEdit
                            ? <i className="material-icons">clear</i>
                            : <i className="material-icons">create</i>}

                    </button>
                </div>
            </div>
            {isEdit && <EditNameCard/>}

        </Fragment>
    )
}

export default NameCard;