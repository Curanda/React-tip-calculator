import React, { useState } from 'react'
import './App.css'
import Bill from "./assets/Bill.jsx";
import Review from "./assets/Review.jsx";
import Calculator from "./assets/Calculator.jsx";
import Reset from "./assets/Reset.jsx";
export default function App() {
    const [bill, setBill] = useState(0)
    const [tip1, setTip1] = useState(0)
    const [tip2, setTip2] = useState(0)
    return (
        <>
            <h1>Bill Calculator</h1>
            <Bill onSetBill={setBill} />
            <Review key={1} onSetTip1={setTip1}>
                <h3>How much did you like the service?</h3>
            </Review>
            <Review key={2} onSetTip2={setTip2}>
                <h3>How did your friend like the service?</h3>
            </Review>
            <Calculator tip1={tip1} tip2={tip2} bill={bill}/>
            <Reset />
        </>
    )
}
