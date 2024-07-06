import React from 'react';
import Link from 'next/link';
import { AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Made by Rishabh</p>
      <p className="icons">
      <a
      href="https://github.com/Rishabh-Agarwal9/saleza"
      target="_blank"
      rel="noopener noreferrer"
      style={{ cursor: "pointer" }}
    >
      <AiFillGithub />
    </a>
      </p>
    </div>
  )
}

export default Footer