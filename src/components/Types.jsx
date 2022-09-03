import React, { useEffect } from "react";
import '../styles/Types.css'


const Types = (props) => {
    const { name } = props.type.type
    const { changeBgType, firstType } = props
    const toUpperName = name.charAt(0).toUpperCase() + name.slice(1)

    useEffect(() => {
        changeBgType(firstType)
    }, [])

    return (

        <span className={`type-container ${name}`}>{toUpperName} </span>

    )

}

export default Types