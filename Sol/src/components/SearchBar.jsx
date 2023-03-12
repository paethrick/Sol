import { useState } from "react"

export const SearchBar = ({asd,searchDestination}) => {

  const [destination,setDestination] = useState('')

  const Add = (e) => {
    e.preventDefault()
    searchDestination(destination)
    setDestination('')
  }

  return(
    <div className="drop-shadow-md">
      <div className="flex h-[4.5rem] w-[25rem] mr-28 mt-5 rounded-full border-2">
        <form action="submit" onSubmit={Add}>
          <input type="text" value={asd} onChange={(e)=>setDestination(e.target.value)} className=" flex justify-center ml-16 h-10 mt-3.5 border-2 rounded-full pl-3 text-xl pb-1" />
          <button type="submit" className="bg-sky-300 rounded-full h-10 border-2 w-10 h-10"></button>
        </form>
      </div>
    </div>
  )
}