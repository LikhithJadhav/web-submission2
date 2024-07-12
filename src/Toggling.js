import React, { useState } from 'react';

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
  };

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="toggleSwitch"
        checked={darkMode}
        onChange={toggleMode}
      />
      <label className="form-check-label" htmlFor="toggleSwitch">
        Dark Mode
      </label>
    </div>
  );
};

export default Toggle;
