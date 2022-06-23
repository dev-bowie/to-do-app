import React from 'react'
import './footer.css'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <a href="https://twitter.com"><FiTwitter /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://github.com/bowie95"><FiGithub /></a>
        </div>
        <div className="footer-copyright">
            <small>&copy; bowie95 - All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer