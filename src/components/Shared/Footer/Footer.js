import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, made with <span className="heart" /> by{' '}
      <a href="https://duydev.me">Trần Nhật Duy</a>
    </footer>
  )
}

export default Footer
