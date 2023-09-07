import React from "react"

function Calculator({ tip1, tip2, bill }) {
    const totalTip = (tip1+tip2)/100;

    return (
    <>
        <h3>You pay ${bill+(Math.round(bill*totalTip))} (${bill} + ${Math.round(bill*totalTip)})</h3>
    </>
    )
}

export default Calculator
