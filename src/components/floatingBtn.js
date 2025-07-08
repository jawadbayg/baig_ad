import React from 'react';

const FloatingButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/+923006653407?text=Hello!%20I%20need%20assistance.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        zIndex:'2',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366', 
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
      }}
    >
      <img
       
        src="/images/whatsapp.png" 
        alt="WhatsApp"
        style={{
          width: '30px',
          height: '30px',
        }}
      />
    </button>
  );
};

export default FloatingButton;
