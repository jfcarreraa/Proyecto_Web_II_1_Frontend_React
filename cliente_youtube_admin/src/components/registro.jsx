import React, { useState } from 'react';
import './registro.css';

function Registro() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    pin: '',
    firstName: '',
    lastName: '',
    country: '',
    birthDate: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor
  };

  return (
    <div className="registro-container">
      <h2 className="registro-title">Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          type="pin"
          name="pin"
          placeholder="Pin"
          value={Text}
          onChange={handleChange}
          required
        />
        <input
          type="firstName"
          name="firstName"
          placeholder="firstName"
          value={Text}
          onChange={handleChange}
          required
        />
        <input
          type="lastName"
          name="lastName"
          placeholder="lastName"
          value={Text}
          onChange={handleChange}
          required
        />
         <input
          type="country"
          name="country"
          placeholder="country"
          value={Text}
          onChange={handleChange}
          required
        />
         <input
          type="birthDate"
          name="birthDate"
          placeholder="birthDate"
          value={Text}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;

