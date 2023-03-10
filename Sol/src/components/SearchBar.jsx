export const SearchBar = () => {
  return(
    <div className="drop-shadow-md">
      <div className="flex h-[4.5rem] w-[25rem] mr-28 mt-5 rounded-full border-2">
        <input type="text" className=" flex justify-center ml-16 h-10 mt-3.5 border-2 rounded-full pl-3 text-xl pb-1" />
        <button type="submit" className="bg-sky-300 rounded-full h-10 mt-3.5 ml-1 border-2 w-10 h-10"></button>
      </div>
    </div>
  )
}