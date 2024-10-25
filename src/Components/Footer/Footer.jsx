import React from 'react'

const Footer = () => {
  return (

    <div className="flex h-screen gap-3">
    {/* Izquierda */}
    <div className="w-1/5 bg-gray-200 p-4 rounded-sm">
      <p>Sección Izquierda</p>
    </div>
    
    {/* Central */}
    <div className="w-3/5 bg-gray-400 p-4">
      <p>Sección Central</p>
    </div>
    
    {/* Derecha */}
    <div className="w-1/5 bg-gray-200 p-4">
      <p>Sección Derecha</p>
    </div>
  </div>
);
}

export default Footer
