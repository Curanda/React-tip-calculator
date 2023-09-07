import React from "react"

function Reset() {
    function handleReset() {
        window.location.reload()
    }
    return (
    <button style={{backgroundColor: 'white', color: 'black'}} onClick={handleReset}><strong>RESET</strong></button>
    )
}

export default Reset
