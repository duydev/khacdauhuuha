import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()} - Made with <span className="heart" /> by{' '}
      <a href="https://duydev.me">Trần Nhật Duy</a>
    </footer>
  )
}

export default Footer
