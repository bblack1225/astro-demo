import { useState } from 'react';
export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting</h3>
      <button
        style={{
          background: 'darkblue',
          color: '#FFF',
          borderRadius: '5px',
          fontSize: '1.2rem',
          marginBottom: '15px',
          padding: '5px 10px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={() => setGreeting(randomMessage())}
      >
        new Greeting
      </button>
    </div>
  );
}
