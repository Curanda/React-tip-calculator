import React from "react"

function Review(props) {
    function handleTip(data) {
        (props.key === 1) ? props.onSetTip1(Number(data)) : props.onSetTip2(Number(data));
    }
    return (
        <>
            {props.children}
            <select onChange={(e)=>handleTip(e.target.value)} defaultValue={10}>
                <option value={5}>It was ok (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>It was amazing (20%)</option>
            </select>
        </>
    )
}

export default Review
