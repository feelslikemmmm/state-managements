import { IoMoonSharp } from 'react-icons/io5';

const ColorModeSwitcher = () => {
  const toggleTheme = () => {
    const htmlEl = document.querySelector('html');
    if (!htmlEl) return;

    const enableDarkMode = htmlEl.classList.contains('dark');
    if (enableDarkMode) {
      htmlEl.classList.remove('dark');
    } else {
      htmlEl.classList.add('dark');
    }
  };

  return (
    <div className="flex justify-center p-2 rounded-md">
      <button onClick={toggleTheme}>
        <IoMoonSharp />
      </button>
    </div>
  );
};

export default ColorModeSwitcher;
