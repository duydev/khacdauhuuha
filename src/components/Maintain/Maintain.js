import React from 'react'
import './Maintain.scss'

const Maintain = () => (
  <div id="maintain">
    <h1>Website đang được xây dựng.</h1>
    <h3>Vui lòng truy cập lại sau.</h3>

    <img src="https://media.giphy.com/media/3o7abDnUPDkOC05QU8/giphy.gif" />

    <p>
      &copy; {new Date().getFullYear()} - make with <span className="heart" />{' '}
      by <a href="https://duydev.me">Trần Nhật Duy</a>.
    </p>
  </div>
)

export default Maintain
