import { useState } from "react"

export const SearchLine = () => {

  const [word, setWord] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setWord(value)
  }

  return(
    <>
      <input className="bg-sky-400" type="text" name={name} onChange={handleChange}/>
    </>
  )
}