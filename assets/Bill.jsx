import React, { useEffect } from "react"

function Bill({ onSetBill }) {
    return (
    <>
        <h3>How much was the bill?</h3>
        <input min={0} onChange={(e)=>onSetBill(Number(e.target.value))} defaultValue={0}/>
    </>
    )
}

export default Bill
