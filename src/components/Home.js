import React from 'react';
import { Link } from 'react-router-dom';

const homeStyles = {
  background: '#795c4d',
  height: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white', // Set text color to white
};

function Home() {
  return (
    <div style={homeStyles}>
      <div className="text-center">
        <h1>Welcome to Abyssal Publication House</h1>
        <p>How can we assist you today?</p>
      </div>
      <div className="text-center mt-4">
        <Link to="/dashboard" className="btn mr-2" style={{ backgroundColor: 'white', color: '#5C4033', fontWeight: 'bold' }}>
          Dashboard
        </Link>
      </div>
      <div className="text-center mt-4">
        <Link to="/create-ticket" className="btn mr-2" style={{ backgroundColor: 'white', color: '#5C4033', fontWeight: 'bold' }}>
          Create New Ticket
        </Link>
      </div>
    </div>
  );
}

export default Home;
