// PantallaInicio.js
import React, { useState } from 'react';
//import './styles.css'; // Importa tu archivo de estilos CSS

function PantallaInicio() {
  const [pin, setPin] = useState('');
  const [showGestionVideos, setShowGestionVideos] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    // Lógica para validar el pin y mostrar/ocultar las secciones
    // Aquí puedes implementar la lógica para validar el pin y mostrar/ocultar las secciones
  };

  const handleAvatarClick = (avatarPin) => {
    // Lógica para mostrar la sección correspondiente al avatar seleccionado
    // Aquí puedes implementar la lógica para mostrar la sección correspondiente al avatar seleccionado
  };

  return (
    <div className="pantalla-inicio">
        
      <div className="avatars">

        <div className="avatar">
          <img src="avatar1.png" alt="Avatar Usuario 1" onClick={() => handleAvatarClick('123456')} />
          <button className="pin-btn" onClick={() => handleAvatarClick('123456')}>Pin</button>
        </div>

        <div className="avatar">
          <img src="avatar2.png" alt="Avatar Usuario 2" onClick={() => handleAvatarClick('654321')} />
          <button className="pin-btn" onClick={() => handleAvatarClick('654321')}>Pin</button>
        </div>
        {/* Agrega más avatares según sea necesario */}
      </div>


      <form onSubmit={handlePinSubmit}>
        <input type="text" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Ingrese el pin" />
        <button type="submit">Enviar</button>
      </form>


      <a href="#" onClick={() => setShowGestionVideos(true)}>Administrar Videos</a>

    </div>
  );
}

export default PantallaInicio;
