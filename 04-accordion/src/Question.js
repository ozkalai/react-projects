import React, { useState } from "react";
import { FaPlus , FaMinus } from "react-icons/fa"
 
const Question = ({id,title,info}) => {
    const [button , setButton ] = useState(false);
    const showInfo = (id) => {
        return (
            setButton(!button)
        )
    }
    console.log(button)
    return(
    <article className="question">
        <header>
            <h4>{title}</h4>
            <button className="btn" onClick={showInfo}> 
                {button?<FaMinus />:<FaPlus />}
            </button>
        </header>
        <p>{button?info : ""}</p>
    </article>
    )
}

export default Question