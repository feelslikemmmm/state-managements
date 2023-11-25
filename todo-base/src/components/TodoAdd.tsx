const TodoAdd = () => {
  return (
    <div className="pt-2 flex flex-row">
      <div className="grow min-h-[50px] pr-4">
        <input
          className="w-full h-full p-2 border rounded-lg"
          type="text"
          placeholder="New todo"
        />
      </div>
      <div className="flex justify-center basis-1/4 min-h-[50px] border rounded-lg bg-[#EAF0F5] dark:bg-slate-500 dark:border-none font-bold">
        <button>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoAdd;
