import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { ToggleContainer, ToggleButton } from './ThemeToggleStyles';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleContainer>
      <ToggleButton onClick={toggleTheme}>
        {isDark ? <FaSun /> : <FaMoon />}
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;