import React from 'react'

const CardComponent = (props) => {
    return (
        <div>
            <h3>{props?.item?.name}</h3>
        </div>
    )
}

export default CardComponent
