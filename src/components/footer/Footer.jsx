import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h2 className="footer__title">Jeevitha </h2>
        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#projects" className="footer__link">Projects</a>
            </li>

            <li>
                <a href="#contact" className="footer__link">Contact Me</a>
            </li>
        </ul>

        <span className='footer__copy'> Designed By Jeevitha Srinivasan ❣️</span>
        </div>
    </footer>
  )
}

export default Footer