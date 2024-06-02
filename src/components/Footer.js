import React from 'react'
import "../styles/header-footer.css"


const Footer = () => {
    const today = new Date();
    return (
    <footer className='footer-class'>
        Copyrights &copy; {today.getFullYear()}
    </footer>
    )
}

export default Footer
