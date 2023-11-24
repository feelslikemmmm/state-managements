import { IoMoonSharp } from 'react-icons/io5';

const TopBar = () => {
  return (
    <div className="pt-2 grid grid-cols-2 gap-3">
      <div className="flex justify-center p-2 rounded-md">
        <IoMoonSharp />
      </div>
      <div className="p-2 bg-slate-200 flex justify-center rounded-md font-bold">
        <button>Load</button>
      </div>
    </div>
  );
};

export default TopBar;
