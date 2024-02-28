// import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="media">
        <button className="media-icons"><img className="media_img" src='src\assets\fb_share.jpg' alt='follow us on facebook'/></button>
        <button className="media-icons"><img className="media_img" src='src\assets\twit_share.png' alt='follow us on twitter'/></button>
        <button className="media-icons"><img className="media_img" src='src\assets\insta_share.jpeg' alt='follow us on instagram'/></button>
      </div>
      <p className="deliverable_cities">We deliver in</p>
      <p className="deliverable_cities">Kolkata | Bahadurgarh | Raichur | Sindudurg | Sangareddy |Kurnool | Jadcherla | Muzaffarpur</p>
    </footer>
  )
}

export default Footer
