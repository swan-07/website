import React, { useState, useEffect } from 'react';

const Link = ({ text, url }) => {
  const linkStyle = {
    textDecoration: 'underline',
    transition: 'color 0.3s ease', // Adding transition for smooth color change
    color: 'black', // Initial color of the link
    opacity: 1, // Initial opacity
  };

  const hoverLinkStyle = {
    ...linkStyle,
    color: 'gray', // Lightened color when hovered
    opacity: 0.8, // Adjusted opacity when hovered
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      style={isHovered ? hoverLinkStyle : linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </a>
  );
};

export default function Welcome() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const headingStyle = {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 80
  };

  const textStyle = {
    marginLeft: 20,
    fontSize: 15
  };

  const bottomStyle = {
    marginTop: 70,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 40
  };

  const listStyle = {
    listStyleType: 'circle',
    marginLeft: 50
  };



  return (
    <div>
      <h1 style={headingStyle}>Stephanie Wan</h1>

      <p style={textStyle}>
        Hi! I'm Stephanie Wan! Welcome to my website. I'm a student at Lexington High School (class of 2025), and I enjoy <Link text="art" url="/category/art" />,{' '}
        <Link text="computer science" url="/category/tech" />, science, and <Link text="reading" url="/category/books" />. Feel free to check out some of my <Link text="recent art" url="/artgallery" />, <Link text="projects" url="/projects" />, or what I've <Link text="been up to lately" url="/blog" />!
      </p>

      {/* <h1 style={bottomStyle}>About Me</h1>
      <p style={textStyle}>I'm a junior at Lexington High </p>
       */}
      <h1 style={bottomStyle}>Contact</h1>
      <ul style={listStyle}>
        <li>Instagram: stephaniewan07</li>
        <li>Github: swan-07</li>
        <li>Discord: swan07</li>
      </ul>
      </div>

  );
  }