import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function ThemeToggle() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <SunIcon className="theme-icon" />
      ) : (
        <MoonIcon className="theme-icon" />
      )}
    </button>
  );
}

export default ThemeToggle;