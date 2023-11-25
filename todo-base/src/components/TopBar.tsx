import ColorModeSwitcher from './ColorModeSwitcher';

const TopBar = () => {
  return (
    <div className="pt-2 grid grid-cols-2 gap-3">
      <ColorModeSwitcher />
      <div className="p-2 bg-[#EAF0F5] dark:bg-slate-500 flex justify-center rounded-md font-bold">
        <button>Load</button>
      </div>
    </div>
  );
};

export default TopBar;
