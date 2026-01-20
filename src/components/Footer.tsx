import React from 'react'

function Footer() {
    const myStyle = {
        color: "white",
        backgroundColor: "black",
        textAlign: "center" as const,
        padding: "1rem",
        marginTop: "2rem"
        
    }
  return (
    <footer style={myStyle}>
        <p>Min musiklista © 2026</p>
    </footer>
  )
}

export default Footer