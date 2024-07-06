import React from 'react';
import { AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Made by Rishabh</p>
      <p className="icons">
      <Link href="https://github.com/Rishabh-Agarwal9/saleza" target="_blank" rel="noopener noreferrer">
        <AiFillGithub />
      </Link>
      </p>
    </div>
  )
}

export default Footer