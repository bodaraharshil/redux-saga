import React from 'react'

const CardComponent = (props) => {
    return (
        <div>
            <p>{props?.item?.title}</p>
        </div>
    )
}

export default CardComponent
