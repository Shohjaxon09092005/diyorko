import React from 'react'

function RaqamBir({ raqam2, title2, desc2 }) {
    return (
        <div>
            <div className="raqam_card2">
                <div>
                    <h1>{raqam2}</h1>
                </div>
                <div className="raqam_con2">
                    <h5>{title2}</h5>
                    <p>{desc2}</p>
                </div>
            </div>

        </div>
    )
}

export default RaqamBir
