import React from 'react';

const CardGrid = () => {
  return (
    <div className="grid-container">
        <a href="https://lhsmathcs.org/" className="card">
            <div className="card">
                <img src="lexmacs.png" alt="LexMACS" />
                <div className="card-details">
                <h3>LexMACS</h3>
                <p>LHS Club for mathematical computer science (cybersecurity, algorithmic programming)</p>
                </div>
            </div>
      </a>
      <a href="https://sites.google.com/lexingtonma.org/lexingtonscioly/home" className="card">
            <div className="card">
                <img src="https://cdn.discordapp.com/icons/879172166787170325/9e01152d8777b81c2058d2af6ecc7340.webp?size=240" alt="LHS Science Olympiad" />
                <div className="card-details">
                <h3>LHS Science Olympiad</h3>
                {/* <p>Captain of Science Olympiad Club</p> */}
                </div>
            </div>
      </a>
    </div>
  );
};

export default CardGrid;